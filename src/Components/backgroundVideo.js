import React from 'react';
import YouTube from 'react-youtube';

const videoOptions = { 
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      loop: 1,
      modestbranding: 1,
      disablekb: 1,
      playlist: "5jmALV5kDVw",
      start: 4
    }
  };

const backgroundVideo = () =>{
    return(
    <div className="video-background">
        <div className="video-foreground">
            <YouTube
            videoId="5jmALV5kDVw"
            opts={videoOptions}
            className="video-iframe"
            onReady={(event)=> event.target.mute()}
            />
        </div>
    </div>
    )
}

export default backgroundVideo;