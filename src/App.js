import React, { useEffect} from 'react';
import Axios from 'axios'
import './reset.scss'
import './App.scss'
import {setGlitchedWriter, glitchWrite} from "glitched-writer"
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
    const crystal_01 = React.createRef()
    const crystal_02 = React.createRef()
    const crystal_03 = React.createRef()

    const testWriter = async (element) => {
      const displayWriter = setGlitchedWriter(element, {preset: 'nier'})
      let index = 0
      const messages = ["A FFXIV work order system", "Login via discord to continue"]
      while(0 != 1){
        await wait(18000)
        displayWriter.write(messages[index], {preset: 'nier'})
        index++
        if(index === messages.length){
          index = 0
        }
      }

   
      
    }


    const scrollCrystal = () => {
      var posY1 = 0;
      var posY2 = 0;
      var posY3 = 0;
      var imgH = 500;
      setInterval( function(){
        if (posY1 <= -900) posY1 = 0;
        if (posY2 <= -900) posY2 = 0;
        if (posY3 <= -1200) posY3 = 0;
        posY1 -= 1;
        posY2 -= 2;
        posY3 -= 3;
        // await crystal_01
        crystal_01.current.style.backgroundPosition = '0' + posY1 + 'px' 
        crystal_02.current.style.backgroundPosition = '0' + posY2 + 'px'
        crystal_03.current.style.backgroundPosition = '0' + posY3 + 'px'
        // $('.crystal_01').css({ backgroundPosition: '0' + posY1 + 'px' });
        // $('.crystal_02').css({ backgroundPosition: '0' + posY2 + 'px' });
        // $('.crystal_03').css({ backgroundPosition: '0' + posY3 + 'px' });
      },50);

    } 
    
    useEffect(() => {
      testWriter(glitch.current)
      scrollCrystal()
    }, [])

  return (
    <>
      <nav className="nav">
        <div className="link">
          <a href="https://www.google.com">discord login</a>
        </div>
      </nav>
      <div className="wrapper">
        <img src={logo}/>
        <h1 ref={glitch} className="text"></h1> 
      </div>
      <div id="crystals">
        <div ref={crystal_01} class="crystal_01"></div>
        <div ref={crystal_02} class="crystal_02"></div>
        <div ref={crystal_03} class="crystal_03"></div>    
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
