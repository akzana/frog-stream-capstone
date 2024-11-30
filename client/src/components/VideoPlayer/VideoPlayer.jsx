import React from 'react';

const VideoPlayer = ({ src, width = '640px', height = '360px', controls = true }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
      <video
        width={width}
        height={height}
        controls={controls}
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;