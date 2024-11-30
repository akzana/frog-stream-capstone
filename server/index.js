import express from "express";
import "dotenv/config";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js";
// import { Server } from "socket.io";
// import OBSWebSocket from 'obs-websocket-js';

const PORT = process.env.PORT;

const app = express();

// ====== Middleware ======
app.use(cors());
app.use(express.json());
// ========================



// ===== User Data ======
app.use("/users", usersRoutes);
//=======================



//====== OBS Connection ===========
import OBSWebSocket from 'obs-websocket-js';
const obs = new OBSWebSocket();
const OBS_PORT = process.env.OBS_PORT || 'localhost:4455';
const OBS_PASS = process.env.OBS_PASS || '';


const config = {address: 'ws://localhost:4455'};

console.log('Connecting to OBS with config:', config);

obs.connect('ws://localhost:4455')
  .then(() => {
    console.log('Connected to OBS');
    // return obs.send('GetVersion'); // Test an API call
  })
  // .then(version => {
  //   console.log('OBS Version:', version);
  // })
  .catch(err => {
    console.error('Failed to connect to OBS:', err.message || err);
    if (err.code) console.error('Error code:', err.code);
    if (err.description) console.error('Error description:', err.description);
  });

// Endpoint to start streaming
app.post('/start-stream', async (req, res) => {
  try {
    await obs.call('StartStreaming');
    res.send({ message: 'Streaming started' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Endpoint to stop streaming
app.post('/stop-stream', async (req, res) => {
  try {
    await obs.call('StopStreaming');
    res.send({ message: 'Streaming stopped' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Endpoint to set the current scene
app.post('/set-scene', async (req, res) => {
  const { sceneName } = req.body;
  try {
    await obs.call('SetCurrentProgramScene', { sceneName });
    res.send({ message: `Scene changed to ${sceneName}` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
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