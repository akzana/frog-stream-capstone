import React from 'react';
import {io} from "socket.io-client";

export default function LiveChat() {

  return (
    <div>
      {/* <h1>Live Stream</h1> */}
      <iframe
        src="http://localhost:3000/LiveChat.html"
        style={{ width: '100%', height: '500px', border: 'none' }}
      />
    </div>
  )
}
