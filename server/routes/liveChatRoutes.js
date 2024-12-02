// import express from 'express';
// import { createServer } from 'node:http';
// import { fileURLToPath } from 'node:url';
// import { dirname, join } from 'node:path';
// import { Server } from 'socket.io';
// import sqlite3 from 'sqlite3';
// import { open } from 'sqlite';

// // open the database file
// const db = await open({
//   filename: 'chat.db',
//   driver: sqlite3.Database
// });

// // create our 'messages' table (you can ignore the 'client_offset' column for now)
// await db.exec(`
//   CREATE TABLE IF NOT EXISTS messages (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       client_offset TEXT UNIQUE,
//       content TEXT
//   );
// `);

// const router = express.Router();
// const server = createServer(router);
// const io = new Server(server,  {
//   connectionStateRecovery: {}
// });

// const __dirname = dirname(fileURLToPath(import.meta.url));

// router.get('/', (_req, res) => {
//   res.sendFile(join(__dirname, 'liveChat.html'));
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
//   });
// });

// io.on('connection', async (socket) => {
//   socket.on('chat message', async (msg) => {
//     let result;
//     try {
//       // store the message in the database
//       result = await db.run('INSERT INTO messages (content) VALUES (?)', msg);
//     } catch (e) {
//       // TODO handle the failure
//       console.error("error storing message in database",e);
//       ;
//     }
//     // include the offset with the message
//     io.emit('chat message', msg, result.lastID);
//   });
//   if (!socket.recovered) {
//     // if the connection state recovery was not successful
//     try {
//       await db.each('SELECT id, content FROM messages WHERE id > ?',
//         [socket.handshake.auth.serverOffset || 0],
//         (_err, row) => {
//           socket.emit('chat message', row.content, row.id);
//         }
//       )
//     } catch (e) {
//       console.error("something whent wrong at socket recovery:", e);
      
//     }
//   };
// });
// export default router;