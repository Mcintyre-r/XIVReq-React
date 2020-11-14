import React, { useEffect, useState,useRef} from 'react';
import './reset.scss'
import './App.scss'
import {scrollCrystal,testWriter} from './utility.js'
import logo from './Assets/ffxiv_req_logo.png'
import Youtube from './Components/backgroundVideo.js'
import Crystal from './Components/crystal.js'



 function App (){
   const [login, setLogin] = useState(false)


    const glitch = React.createRef()
    const crystal_01 = useRef()
    const crystal_02 = useRef()
    const crystal_03 = useRef()


    useEffect(() => {
      testWriter(glitch.current)
      scrollCrystal(crystal_01,crystal_02,crystal_03)
    },[])

  return (
    <div className="container">
      <div className="wrapper fade_in_left">
        <img src={logo} className="" alt='FFXIV REQUISITION logo'/>
        <h1 ref={glitch} className="glitch" alt='subtitle'> </h1> 
        <button onClick={()=> setLogin(!login)}>Log in</button>
      </div>

      <Crystal crystals={[crystal_01,crystal_02,crystal_03]}/>

      
      <div className="leftShape"/>
      {login? <div className="rightShape"/> : null}
      

      <Youtube />
    </div>
  );
}



export default App;
