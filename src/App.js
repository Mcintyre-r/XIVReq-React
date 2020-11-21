import React, { useEffect, useState,useRef} from 'react';
import {scrollCrystal,glitchWriter, getRequest} from './Utility/utility.js';
import logo from './Assets/req.png';
import Youtube from './Components/backgroundVideo.js';
import Crystal from './Components/crystal.js';
import CardContainer from './Components/cardContainer'
import User from './Components/user'





 function App (){
    const [login, setLogin] = useState(true)
    const [requests, setRequests] = useState([])
    const glitch = useRef()
    const [crystal_01, setCrystal_01] = useState()
    const [crystal_02, setCrystal_02] = useState()
    const [crystal_03, setCrystal_03] = useState()
    const [mute, setMute] = useState(true)

    useEffect(() => {
      glitchWriter(glitch.current)
      scrollCrystal(crystal_01,crystal_02,crystal_03)
      getRequest(setRequests)

    },[crystal_01])

  return (
    <div className="container">
      <div className="wrapper fade_in_left">
        <img src={logo} className="logo" alt='FFXIV REQUISITION logo'/>
        <h1 ref={glitch} className="glitch" alt='subtitle'> </h1> 
        { login ? 
        <User setLogin={setLogin} userName='Exa#0469' userAvatar='https://cdn.discordapp.com/avatars/59423394055069696/a1e332503465aed23e81bf3ff3e5272d.webp'/>
        :
        // href='localhost:5000/api/auth/'
        <a onClick={()=>setLogin(!login)} className='btn'>Log in</a>    
        }
      </div>
      {login? <CardContainer requests={requests}/> : null}
      <Crystal crystals={[setCrystal_01,setCrystal_02,setCrystal_03]}/>

      <div className="leftShape"/>
      {login? <div className="rightShape"/> : null}
      

      <Youtube mute={mute} />
    </div>
  );
}



export default App;
