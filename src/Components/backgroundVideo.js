import React from 'react';
import YouTube from 'react-youtube';



const videoOptions = { 
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
      disablekb: 1,
      start: 156,
      end: 184,
    }
  };

const backgroundVideo = (props) =>{
    return(
    <div className="video-background">
        <div className="video-foreground">
            <YouTube
            videoId="RVQtvBIdv4Y"
            opts={videoOptions}
            className="video-iframe"
            onReady={(event)=> event.target.mute()}
            onEnd={(event)=> event.target.seekTo(5)}
            />
        </div>
    </div>
    )
}

export default backgroundVideo;
