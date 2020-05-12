import React, { useEffect} from 'react';
import './App.css';
import Axios from 'axios'
import {Cookies} from 'react-cookie';

function App() {
 
  const getReq = () => {
    Axios.get('http://localhost:5000/api/requests')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log("err:", err)
    })
  }
  useEffect(()=>{
    const loggedin = Cookies.get('discordOauth')
    
    if(loggedin){
      getReq()
    }
    
  }, [])
  return (
    <div>
      <a href='http://localhost:5000/api/auth'>
      <button>click</button>
      </a>
    </div>
  );
}

export default App;
