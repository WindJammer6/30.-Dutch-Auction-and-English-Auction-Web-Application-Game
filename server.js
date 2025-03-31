// server.js (Node.js with Express and Socket.IO)
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

let games = {}; // Store all game sessions in memory

io.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`);

  socket.on('createGame', (gameCode) => {
    games[gameCode] = {
      host: socket.id,
      players: [],
      currentQuestion: null
    };
    socket.join(gameCode);
    console.log(`Game created with code: ${gameCode}`);
  });

  socket.on('joinGame', ({ gameCode, playerName }) => {
    if (games[gameCode]) {
      games[gameCode].players.push({ id: socket.id, name: playerName, score: 0 });
      socket.join(gameCode);
      io.to(gameCode).emit('playerList', games[gameCode].players);
      console.log(`${playerName} joined game ${gameCode}`);
    } else {
      socket.emit('error', 'Game not found');
    }
  });

  socket.on('sendQuestion', ({ gameCode, question }) => {
    games[gameCode].currentQuestion = question;
    io.to(gameCode).emit('newQuestion', question);
  });

  socket.on('submitAnswer', ({ gameCode, playerName, answer }) => {
    const game = games[gameCode];
    if (game && game.currentQuestion) {
      const correct = answer === game.currentQuestion.correct;
      const player = game.players.find(p => p.name === playerName);
      if (player && correct) {
        player.score += 1;
      }
      io.to(game.host).emit('playerAnswered', { playerName, answer, correct });
    }
  });

  socket.on('getScores', (gameCode) => {
    if (games[gameCode]) {
      io.to(gameCode).emit('scoreUpdate', games[gameCode].players);
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
