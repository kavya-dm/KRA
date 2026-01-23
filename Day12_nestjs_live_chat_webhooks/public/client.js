// Connect to WebSocket namespace
const socket = io('http://localhost:3000/chat');

const messages = document.getElementById('messages');

socket.on('message', (data) => {
  const li = document.createElement('li');
  li.innerText = data.system
    ? `[SYSTEM] ${data.text}`
    : `${data.user}: ${data.message}`;
  messages.appendChild(li);
});

socket.on('notification', (data) => {
  const li = document.createElement('li');
  li.innerText = `[NOTIFICATION] ${data.text}`;
  li.style.color = 'green';
  messages.appendChild(li);
});

function joinRoom() {
  const room = document.getElementById('room').value;
  socket.emit('joinRoom', room);
}

function sendMessage() {
  socket.emit('sendMessage', {
    room: document.getElementById('room').value,
    user: document.getElementById('user').value,
    message: document.getElementById('message').value,
  });
}
