import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LiveChat() {
  const [liveChat, setLiveChat] = useState(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const getLiveChat = async () => {
    try {
      const response = await axios.get(`${baseUrl}/live-chat/` ||'http://localhost:8080');
      console.log(response);

      setLiveChat(response.data);


    } catch (err) {
      console.error("error fetching live chat: ", err);
    }
  };
  
  useEffect(() => {
    getLiveChat();
  }, [])

  return (
    <div>
      <article
        dangerouslySetInnerHTML={{ __html: liveChat || '<p>Loading...</p>' }}
      />
    </div>
  )
}
