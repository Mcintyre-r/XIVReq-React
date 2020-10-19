import React, { useEffect} from 'react';
// import './App.css';
import Axios from 'axios'
import './reset.scss'
import './App.scss'


import YouTube from 'react-youtube';
import { render } from '@testing-library/react';

function App (){
 
  // const getReq = () => {
  //   Axios.get('http://localhost:5000/api/requests')
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => {
  //     console.log("err:", err)
  //   })
  // }
  // useEffect(()=>{
  //     getReq()
  // }, [])
  // var decodedCookie = decodeURIComponent(document.cookie);
  // const cookies = document.cookie
  // console.log(cookies)

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
    
  return (
    <>
      <nav className="nav">
        <div className="link">
          <a href="google.com">discord login</a>
        </div>
       
      </nav>

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
    </>
  );
}



export default App;
