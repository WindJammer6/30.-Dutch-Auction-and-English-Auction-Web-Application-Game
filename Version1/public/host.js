const socket = io();

function createGame() {
  const gameCode = document.getElementById('gameCode').value;
  socket.emit('createGame', gameCode);
  document.getElementById('questionSection').style.display = 'block';
}

socket.on('playerList', (players) => {
  const list = players.map(p => `<div>${p.name}</div>`).join('');
  document.getElementById('playerList').innerHTML = '<h3>Players:</h3>' + list;
});

function sendQuestion() {
  const gameCode = document.getElementById('gameCode').value;
  const question = {
    q: document.getElementById('questionText').value,
    A: document.getElementById('optionA').value,
    B: document.getElementById('optionB').value,
    C: document.getElementById('optionC').value,
    D: document.getElementById('optionD').value,
    correct: document.getElementById('correctOption').value
  };
  socket.emit('sendQuestion', { gameCode, question });
}

socket.on('playerAnswered', ({ playerName, answer, correct }) => {
  const div = document.getElementById('answers');
  div.innerHTML += `<div>${playerName} answered ${answer} (${correct ? 'Correct' : 'Wrong'})</div>`;
});

function getScores() {
  const gameCode = document.getElementById('gameCode').value;
  socket.emit('getScores', gameCode);
}

socket.on('scoreUpdate', (players) => {
  const list = players.map(p => `<div>${p.name}: ${p.score}</div>`).join('');
  document.getElementById('scores').innerHTML = '<h3>Scores:</h3>' + list;
});