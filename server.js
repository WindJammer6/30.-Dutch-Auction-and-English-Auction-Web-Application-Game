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

// Object to store Dutch auction and English auction games and players
let dutchGames = {};
let englishGames = {};

io.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`);

  ////////////////////
  // Dutch Auctions //
  ////////////////////

  // ----------------------------
  // Dutch Auction: Host creates game
  // ----------------------------
  socket.on('createDutchGame', (gameDutchCode) => {
    if (!dutchGames[gameDutchCode]) {
      dutchGames[gameDutchCode] = {
        host: socket.id,
        players: [],
      };
      socket.join(gameDutchCode);
      console.log(`Dutch auction game created with code: ${gameDutchCode}`);
    }
  });

  // ----------------------------
  // Dutch Auction: Player joins game
  // ----------------------------
  socket.on('joinDutchGame', ({ gameDutchCode, playerName }) => {
    if (dutchGames[gameDutchCode]) {
      socket.join(gameDutchCode);
      dutchGames[gameDutchCode].players.push({ id: socket.id, name: playerName });
      console.log(`${playerName} joined Dutch game ${gameDutchCode}`);
  
      // Emit the full player list to everyone in the room
      io.to(gameDutchCode).emit('playerList', dutchGames[gameDutchCode].players);
    } else {
      socket.emit('error', 'Game not found');
    }
  });
  
  socket.on('claimItem', ({ gameDutchCode, playerName }) => {
    const game = dutchGames[gameDutchCode];
    if (game && game.host) {
      // Send claim info to host only
      io.to(game.host).emit('claimItem', {
        playerName,
        gameDutchCode,
      });
  
      // Also broadcast to all players the result (optional)
      io.to(gameDutchCode).emit('auctionResult', {
        winner: playerName,
        price: auctions[gameDutchCode]?.currentPrice || 'Unknown',
        trueValue: 'Hidden in host logic',
      });
  
      console.log(`${playerName} claimed Dutch auction in ${gameDutchCode}`);
    }
  });

  //////////////////////
  // English Auctions //
  //////////////////////
  // ----------------------------
  // English Auction: Host creates game
  // ----------------------------
  socket.on('createEnglishGame', (gameEnglishCode) => {
    if (!englishGames[gameEnglishCode]) {
      englishGames[gameEnglishCode] = {
        host: socket.id,
        players: [],
      };
      socket.join(gameEnglishCode);
      console.log(`English auction game created with code: ${gameEnglishCode}`);
    }
  });

  // ----------------------------
  // English Auction: Player joins game
  // ----------------------------
  socket.on('joinEnglishGame', ({ gameEnglishCode, playerName }) => {
    if (englishGames[gameEnglishCode]) {
      socket.join(gameEnglishCode);
      englishGames[gameEnglishCode].players.push({ id: socket.id, name: playerName });
      console.log(`${playerName} joined English game ${gameEnglishCode}`);
  
      // Emit the full player list to everyone in the room
      io.to(gameEnglishCode).emit('playerList', englishGames[gameEnglishCode].players);
    } else {
      socket.emit('error', 'Game not found');
    }
  });

  socket.on('raiseItem', ({ gameEnglishCode, playerName }) => {
    // Forward it to the host (and everyone) in that room
    io.to(gameEnglishCode).emit('raiseItem', { playerName });
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

  socket.on('disconnect', () => {
    console.log(`Connection ${socket.id} disconnected`);
    // Optionally clean up dutchGames and auctions here
  });
  
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
