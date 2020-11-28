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


const testUser = {
  Name:'Exa#0469',
  Avatar:'https://cdn.discordapp.com/avatars/59423394055069696/a1e332503465aed23e81bf3ff3e5272d.webp',
  Crafter:true
}



 function App (){
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState()
    const [requests, setRequests] = useState([])
    const glitch = useRef()
    const [crystal_01, setCrystal_01] = useState()
    const [crystal_02, setCrystal_02] = useState()
    const [crystal_03, setCrystal_03] = useState()
    const [teamCraft, setTeamCraft] = useState([])

    useEffect(() => {
      glitchWriter(glitch.current)
      scrollCrystal(crystal_01,crystal_02,crystal_03)
      requestHandler(setRequests)

    },[crystal_01, crystal_02, crystal_03])




//test

  return (
    <div className="container">
      <div className="wrapper fade_in_left">
        <img src={logo} className="logo" alt='FFXIV REQUISITION logo'/>
        <h1 ref={glitch} className="glitch" alt='subtitle'> </h1> 
        { login ? 
        <User  userName={user.Name.length>10? user.Name.slice(0,8)+'~': user.Name} userAvatar={user.Avatar}/>
        :
        // href='localhost:5000/api/auth/'
        <div onClick={()=>{
          setUser(testUser)
          setLogin(true)
        }} className='btn'>Log in</div>    
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
