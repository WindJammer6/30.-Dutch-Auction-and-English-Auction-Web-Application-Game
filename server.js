const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve specific HTML files for auction types
app.get('/hostdutchauction.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'hostdutchauction.html'));
});

app.get('/hostenglishauction.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'hostenglishauction.html'));
});

app.get('/playerdutchauction.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'playerdutchauction.html'));
});

app.get('/playerenglishauction.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'playerenglishauction.html'));
});

// Object to store ongoing auctions
let auctions = {};

// Object to store Dutch auction games and players
let dutchGames = {};

io.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`);

  // ----------------------------
  // Dutch Auction: Host creates game
  // ----------------------------
  socket.on('createGame', (gameCode) => {
    if (!dutchGames[gameCode]) {
      dutchGames[gameCode] = {
        host: socket.id,
        players: [],
      };
      socket.join(gameCode);
      console.log(`Dutch auction game created with code: ${gameCode}`);
    }
  });

  // ----------------------------
  // Dutch Auction: Player joins game
  // ----------------------------
  socket.on('joinGame', ({ gameCode, playerName }) => {
    if (dutchGames[gameCode]) {
      socket.join(gameCode);
      dutchGames[gameCode].players.push({ id: socket.id, name: playerName });
      console.log(`${playerName} joined Dutch game ${gameCode}`);
      io.to(gameCode).emit('playerJoined', playerName);
    } else {
      socket.emit('error', 'Game not found');
    }
  });

  // ----------------------------
  // English/Dutch Auction generic logic
  // ----------------------------
  socket.on('createAuction', ({ auctionCode, auctionType }) => {
    auctions[auctionCode] = {
      host: socket.id,
      type: auctionType,
      participants: [],
      currentPrice: auctionType === 'dutch' ? 100 : 50,
      highestBidder: null,
    };
    socket.join(auctionCode);
    console.log(`Auction created with code: ${auctionCode}, type: ${auctionType}`);
  });

  socket.on('joinAuction', ({ auctionCode, participantName }) => {
    if (auctions[auctionCode]) {
      auctions[auctionCode].participants.push({ id: socket.id, name: participantName });
      socket.join(auctionCode);
      io.to(auctionCode).emit('participantList', auctions[auctionCode].participants);
      console.log(`${participantName} joined auction ${auctionCode}`);
    } else {
      socket.emit('error', 'Auction not found');
    }
  });

  socket.on('placeBid', ({ auctionCode, bidAmount, participantName }) => {
    const auction = auctions[auctionCode];
    if (auction) {
      if (auction.type === 'english' && bidAmount > auction.currentPrice) {
        auction.currentPrice = bidAmount;
        auction.highestBidder = participantName;
        io.to(auctionCode).emit('bidUpdate', { currentPrice: auction.currentPrice, highestBidder: auction.highestBidder });
      } else if (auction.type === 'dutch') {
        auction.highestBidder = participantName;
        io.to(auctionCode).emit('auctionWon', { winner: auction.highestBidder, finalPrice: auction.currentPrice });
        delete auctions[auctionCode]; // End auction
      }
    }
  });

  socket.on('disconnect', () => {
    console.log(`Connection ${socket.id} disconnected`);
    // Optionally clean up dutchGames and auctions here
  });

  socket.on('claimItem', ({ gameCode, playerName }) => {
    const game = dutchGames[gameCode];
    if (game && game.host) {
      // Send claim info to host only
      io.to(game.host).emit('claimItem', {
        playerName,
        gameCode,
      });
  
      // Also broadcast to all players the result (optional)
      io.to(gameCode).emit('auctionResult', {
        winner: playerName,
        price: auctions[gameCode]?.currentPrice || 'Unknown',
        trueValue: 'Hidden in host logic',
      });
  
      console.log(`${playerName} claimed Dutch auction in ${gameCode}`);
    }
  });
  
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
