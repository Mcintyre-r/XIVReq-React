import React, { useEffect} from 'react';
import Axios from 'axios'
import './reset.scss'
import './App.scss'
import {setGlitchedWriter, glitchWrite} from "glitched-writer"


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

    const wait = time => new Promise(resolve => setTimeout(resolve, time))
    const glitch = React.createRef()
    const loginRef = React.createRef()

    // const firstWrite = (element, secFunc) => {
    //   glitchWrite(element , "Discord")
    //   wait(6000)
    //   .then(()=> secFunc(element, firstWrite))
    // }

    // const secondWrite = (element, firFunc) => {
    //   glitchWrite(element , "Login")
    //   wait(6000)
    //   .then(()=> firFunc(element, secondWrite))
    // }
    const testWriter = async (element) => {
      const displayWriter = setGlitchedWriter(element, {preset: 'nier'})
      let index = 0
      const messages = ["bitches", "boats", "hoes"]
      while(0 != 1){
        await wait(6000)
        displayWriter.write(messages[index], {preset: 'nier'})
        index++
        if(index === messages.length){
          index = 0
        }
      }

   
      
    }

    useEffect(() => {
      testWriter(glitch.current)
    }, [])

  return (
    <>
      <nav className="nav">
        <div className="link">
          <a ref={loginRef} href="https://www.google.com">discord login</a>
        </div>
      </nav>
      <div className="wrapper">
      <h1 ref={glitch} className="text"></h1> 
    </div>
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
