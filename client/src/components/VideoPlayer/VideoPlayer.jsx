import React, { useEffect, useRef } from 'react';
import flvjs from 'flv.js';

export default function VideoPlayer() {
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
    <div className='video'>
      {/* <h1>Live Stream</h1> */}
      <video className='player' ref={videoRef} controls style={{ width: '60.625rem' }} />
    </div>
  );
};