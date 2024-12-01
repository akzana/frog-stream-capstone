import React, { useEffect, useRef } from 'react';
import flvjs from 'flv.js';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (flvjs.isSupported()) {
      const flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://localhost:4455/live/stream.flv',
      });
      flvPlayer.attachMediaElement(videoRef.current);
      flvPlayer.load();
      flvPlayer.play();
    }
  }, []);

  return (
    <div>
      <h1>Live Stream</h1>
      <video ref={videoRef} controls style={{ width: '100%' }} />
    </div>
  );
};

export default VideoPlayer;