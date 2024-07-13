import React, { useEffect, useState,useRef} from 'react';
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

    const [teamCraft, setTeamCraft] = useState([])

    useEffect(() => {
      glitchWriter(glitch.current)
      const fetchData = async () => {
       await userLogin(window.location.search, setLogin, setUser, user)
       await requestHandler(setRequests, user))
      }
     fetchData()
    },[])
    console.log(user)

  return (
    <div className="container">
      <div className="wrapper fade_in_left">
        <img src={logo} className="logo" alt='FFXIV REQUISITION logo'/>
        <h1 ref={glitch} className="glitch" alt='subtitle'> </h1> 
        { login ? 
        <User  userName={user.username} userAvatar={`https://cdn.discordapp.com/avatars/${user.uuid}/${user.avatar}.png`}/>
        :
        <a  href={`${process.env.REACT_APP_BASEAPIURL}/api/auth/login`} className='btn'>Discord Login</a>    
        }
      </div>
      {user? <CardContainer setLogin={setLogin} user={user} setUser={setUser} requests={requests} setRequests={setRequests} requestHandler={requestHandler} exportHandler={exportHandler} teamCraft={teamCraft} setTC={setTeamCraft}/> : null}

      <div className="leftShape"/>
      {user? <div className="rightShape"/> : null}
    
      <Youtube />
    </div>
  );
}



export default App;
