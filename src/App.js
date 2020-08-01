import React, { useState, useEffect } from 'react';
import "./css/App.css";
import db from './firebase';
import Video from './components/Video';
function App() {
  const [videos, setVidoes] = useState([]);
  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => {
      setVidoes(snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      }
      ));
    })
  }, [])
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ id, url, channel, description, song, likes, messages, shares }) =>
            (
              <Video key={id} url={url} channel={channel} description={description} song={song} likes={likes} messages={messages} shares={shares} />
            ))}
      </div>
    </div>
  );
}

export default App;
