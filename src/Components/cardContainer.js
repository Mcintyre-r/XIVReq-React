import React from 'react'
import Card from './cards'

const cardContainer = (props) => {
 return(
     <div className='rightContainer'>
        <div className='buttonContainer'>
            <div className={props.teamCraft.length?'exportBtn':'exportBtn disabled'} onClick={ ()=> { props.exportHandler(props.teamCraft)}}> Export </div>
            <a className='exportBtn' href='http://localhost:3000' onClick={()=> { 
                            localStorage.removeItem('xivReqUser');
                        }
                        }>Logout</a>
        </div>
        <div className='cardContainer'>
            {props.requests.map((request)=>{ 
                return <Card request={request} teamCraft={props.teamCraft} setTC={props.setTC}/>
            })
            }    
        </div>
     </div>
 )
}

export default cardContainer;