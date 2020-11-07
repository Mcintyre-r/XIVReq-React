import React, { useEffect} from 'react';
import Axios from 'axios'
import './reset.scss'
import './App.scss'
import {scrollCrystal,testWriter} from './utility.js'
import logo from './Assets/ffxiv_req_logo.png'
import Youtube from './Components/backgroundVideo.js'




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


    useEffect(() => {
      testWriter(glitch.current)
      scrollCrystal(crystal_01,crystal_02,crystal_03)
    }, [])

  return (
    <>
      <div className="wrapper">
        <img src={logo} className="fade_in_left" alt='FFXIV REQUISITION logo'/>
        <h1 ref={glitch} className="glitch" alt='subtitle'> </h1> 
      </div>
      <div id="crystals">
        <div ref={crystal_01} class="crystal_01"/>
        <div ref={crystal_02} class="crystal_02"/>
        <div ref={crystal_03} class="crystal_03"/> 
      </div>
      <div className="shape"/>
      <Youtube />
    </>
  );
}



export default App;
