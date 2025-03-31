const socket2 = io();
let gameCode = '';
let playerName = '';

function joinGame() {
  gameCode = document.getElementById('gameCode').value;
  playerName = document.getElementById('playerName').value;
  socket2.emit('joinGame', { gameCode, playerName });
  document.getElementById('questionBox').style.display = 'block';
}

socket2.on('newQuestion', (q) => {
  document.getElementById('questionText').innerText = `${q.q}\nA: ${q.A}\nB: ${q.B}\nC: ${q.C}\nD: ${q.D}`;
});

function submitAnswer(answer) {
  socket2.emit('submitAnswer', { gameCode, playerName, answer });
}