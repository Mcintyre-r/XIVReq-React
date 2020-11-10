import React, { useEffect} from 'react';
import './reset.scss'
import './App.scss'
import {scrollCrystal,testWriter} from './utility.js'
import logo from './Assets/ffxiv_req_logo.png'
import Youtube from './Components/backgroundVideo.js'
import Crystal from './Components/crystal.js'



 function App (){

    const glitch = React.createRef()
    const crystal_01 = React.createRef()
    const crystal_02 = React.createRef()
    const crystal_03 = React.createRef()


    useEffect(() => {
      testWriter(glitch.current)
      scrollCrystal(crystal_01,crystal_02,crystal_03)
    })

  return (
    <div className="container">
      <div className="wrapper">
        <img src={logo} className="fade_in_left" alt='FFXIV REQUISITION logo'/>
        <h1 ref={glitch} className="glitch" alt='subtitle'> </h1> 
      </div>

      <Crystal crystals={[crystal_01,crystal_02,crystal_03]}/>

        <div className="shape"/>
        <div className="otherShape"/>


      <Youtube />
    </div>
  );
}



export default App;
