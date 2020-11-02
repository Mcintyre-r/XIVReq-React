import React, { useEffect} from 'react';
import Axios from 'axios'
import './reset.scss'
import './App.scss'
import {scrollCrystal,testWriter} from './utility.js'
import logo from './Assets/ffxiv_req_logo.png'


import YouTube from 'react-youtube';

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

  // var decodedCookie = decodeURIComponent(document.cookie);
  // const cookies = document.cookie
  // console.log(cookies)

    const glitch = React.createRef()
    const crystal_01 = React.createRef()
    const crystal_02 = React.createRef()
    const crystal_03 = React.createRef()
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

    useEffect(() => {
      testWriter(glitch.current)
      scrollCrystal(crystal_01,crystal_02,crystal_03)
    }, [])

  return (
    <>
      <nav className="nav">
        <div className="link">
          <a href="https://www.google.com">discord login</a>
        </div>
      </nav>
      <div className="wrapper">
        <img src={logo} className="fade_in_left" alt='FFXIV REQUISITION logo'/>
        <h1 ref={glitch} className="text" alt='subtitle'> </h1> 
      </div>
      <div id="crystals">
        <div ref={crystal_01} class="crystal_01"/>
        <div ref={crystal_02} class="crystal_02"/>
        <div ref={crystal_03} class="crystal_03"/> 
      </div>
      <div className="shape"/>
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
