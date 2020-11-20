import React from 'react'
import Card from './cards'

const cardContainer = (props) => {
 return(
     <div className='cardContainer'>
        {props.requests.map((request)=>{ 
             return <Card request={request}/>
        })
        }    
     </div>
 )
}

export default cardContainer;