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
      start: 155,
      end: 166,
    }
  };

const backgroundVideo = (props) =>{
    return(
    <div className="video-background">
        <div className="video-foreground">
            <YouTube
            videoId="VG9VC5B_wRw"
            opts={videoOptions}
            className="video-iframe"
            onReady={(event)=> event.target.mute()}
            onEnd={(event)=> event.target.seekTo(3)}
            />
        </div>
    </div>
    )
}

export default backgroundVideo;