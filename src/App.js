import React, { useEffect, useState,useRef} from 'react';
import scrollCrystal from './Utility/scrollCrystal.js';
import glitchWriter from './Utility/glitchWriter.js';
import requestHandler from './Utility/requestHandler.js';
import exportHandler from './Utility/exportHandler.js';
import logo from './Assets/req.png';
import Youtube from './Components/backgroundVideo.js';
import Crystal from './Components/crystal.js';
import CardContainer from './Components/cardContainer'
import User from './Components/user'
import userLogin from './Utility/userLogin'



 function App (){
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(localStorage.getItem('xivReqUser')||'')
    const [requests, setRequests] = useState([])
    const glitch = useRef()
    const [crystal_01, setCrystal_01] = useState()
    const [crystal_02, setCrystal_02] = useState()
    const [crystal_03, setCrystal_03] = useState()
    const [teamCraft, setTeamCraft] = useState([])
   console.log(user)

    useEffect(() => {
      glitchWriter(glitch.current)
      scrollCrystal(crystal_01,crystal_02,crystal_03)
      requestHandler(setRequests)
      userLogin(window.location.search, setLogin, setUser, user)

    },[crystal_01, crystal_02, crystal_03])



  return (
    <div className="container">
      <div className="wrapper fade_in_left">
        <img src={logo} className="logo" alt='FFXIV REQUISITION logo'/>
        <h1 ref={glitch} className="glitch" alt='subtitle'> </h1> 
        { login ? 
        <User  userName={user.username.length>7? user.username.slice(0,6)+'~'+'#'+user.discriminator: user.username+'#'+user.discriminator} userAvatar={`https://cdn.discordapp.com/avatars/${user.uuid}/${user.avatar}.png`}/>
        :
        <a  href='http://localhost:5000/api/auth/login' className='btn'>Log in</a>    
        }
      </div>
      {user? <CardContainer setLogin={setLogin} setUser={setUser} requests={requests} exportHandler={exportHandler} teamCraft={teamCraft} setTC={setTeamCraft}/> : null}
      <Crystal crystals={[setCrystal_01,setCrystal_02,setCrystal_03]}/>

      <div className="leftShape"/>
      {user? <div className="rightShape"/> : null}
    
      <Youtube />
    </div>
  );
}



export default App;
