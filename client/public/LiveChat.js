import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { Server } from 'socket.io';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'node:path';


const db = await open({
  filename: 'chat.db',
  driver: sqlite3.Database
});


await db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_offset TEXT UNIQUE,
      content TEXT
  );
`);

const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {},
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  }
});

const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/LiveChat.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'LiveChat.html')); 
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log(`Received message: ${msg}`);
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
});

io.on('connection', async (socket) => {
  socket.on('chat message', async (msg) => {
    let result;
    try {
      result = await db.run('INSERT INTO messages (content) VALUES (?)', msg);
    } catch (e) {
      console.error("Error storing the message", e);
      ;
    }
    io.emit('chat message', msg, result.lastID);
  });
  if (!socket.recovered) {
    try {
      await db.each('SELECT id, content FROM messages WHERE id > ?',
        [socket.handshake.auth.serverOffset || 0],
        (_err, row) => {
          socket.emit('chat message', row.content, row.id);
        }
      )
    } catch (e) {
      console.error("something whent wrong at socket recovery:", e);

    }
  };
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});