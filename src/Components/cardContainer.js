import React from 'react'
import Card from './cards'

const cardContainer = (props) => {
    console.log(props)
 return(
     <>
        {props.requests.map(()=>{ 
            //  return <Card />
        })
        }    
     </>
 )
}

export default cardContainer;