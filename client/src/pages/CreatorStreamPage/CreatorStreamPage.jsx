import React from 'react';
import "./CreatorStreamPage.scss";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx';


export default function CreatorStreamPage() {
  return (
    <div>
      <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" />
    </div>
  )
}