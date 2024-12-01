import React from 'react';
import "./CreatorStreamPage.scss";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx';
import LiveChat from '../../components/LiveChat/LiveChat.jsx';


export default function CreatorStreamPage() {
  

  return (
    <div className=''>
      <LiveChat />
      <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" />
    </div>
  )
}