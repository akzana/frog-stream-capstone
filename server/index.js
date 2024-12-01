import express from "express";
import "dotenv/config";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js";

import WebSocket from 'ws';
import { Server } from 'http';
import OBSWebSocket from 'obs-websocket-js';
import NodeMediaServer from "node-media-server";


const PORT = process.env.PORT;

const app = express();

// ====== Middleware ======
app.use(cors());
app.use(express.json());
// ========================



// ===== User Data ======
app.use("/users", usersRoutes);
//=======================

// ===== Node Media Server RTMP ====
const config = {
  rtmp: {
    port: 1935, 
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 4455, 
    allow_origin: '*',
  },
};

const nms = new NodeMediaServer(config);
nms.run();
// =================================


//====== OBS Connection ===========


const httpServer = new Server(app);
const wss = new WebSocket.Server({ server: httpServer });


wss.on('connection', (ws) => {
  console.log('Client connected');


  ws.on('message', (message) => {
    console.log('received: %s', message);
  });


  ws.on('close', () => {
    console.log('Client disconnected');
  });
});


const obsWs = new OBSWebSocket();
obsWs.connect('ws://localhost:4455') 
  .then(() => {
    console.log('Connected to OBS');


    obsWs.on('sceneChanged', (data) => {
      console.log('Scene changed:', data);

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(data));
        }
      });
    });
  })
  .catch((err) => {
    console.error('Error connecting to OBS:', err);
  });


app.get('/video', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Live Stream</h1>
        <video id="video-player" controls autoplay>
          <source src="http://localhost:8080/live/stream.flv" type="video/flv">
        </video>
      </body>
    </html>
  `);
});


//=======================

//==== Standard Set Up ========
app.get("/", (_req, res) => {
  res.send("backend 'homepage'. ");
});

app.listen(PORT, () => {
  console.log("app running on port ", PORT);
});
//===============================