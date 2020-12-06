import Axios from 'axios'
import React from 'react'


const cards = (props) => {

return(
    <div className=' itemCard'>

            <div className='topCardContainer'>
                <img src={props.request.itemIcon}  className='itemIcon' alt='item icon'/>
                <div className='requestDescrip'>
                    <div className='itemName'>
                        <h6>{props.request.item}</h6>
                    </div>
                    <div className='Quantity'>
                        <h6>{props.request.quantity} {props.request.quantity === 1 ? 'item' : 'items'}</h6>
                    </div>
                    <div className='Crafter'>
                        Requester: {props.request.requestedBy}
                    </div>
                    <div className='Crafter'>
                        Crafter: {props.request.claimed? props.request.worker : 'unclaimed'}
                    </div>    
                </div>           
                    
                
            </div>
            

            <div className='requestOptions'>
                <div className={props.request.completed? 'completed' : props.request.workerID?'inProgress':'submitted'}>{
                    props.request.completed?'Completed':    
                        props.request.workerID?'In Progress':'Submitted' 
                }</div>
                {props.teamCraft.includes(props.request)?
                    <div className='btn selected' onClick={()=> {
                        const index = props.teamCraft.indexOf(props.request)
                        const copyOfTC = props.teamCraft
                        copyOfTC.splice(index,1)
                        props.setTC([...copyOfTC])
                    }}>Deselect</div>:
                    <div className='btn' onClick={()=> {
                        props.setTC([...props.teamCraft, props.request])
                    }}>Select</div>
            }
                {props.user.crafter && !props.request.workerID ? 
                <div className='btn' onClick={()=>{
                    Axios.put('http://localhost:5000/api/requests/claim', {user: props.user, requestId: props.request.id})
                    .then(res => props.requestHandler(props.setRequests, props.user))
                    .catch(err => console.log(err))
                }}> Claim </div>
                :null}
                {props.user.uuid === props.request.workerID ? 
                <div className={props.request.completed?'completedBTN':'btn'} onClick={()=>{
                    Axios.put('http://localhost:5000/api/requests/complete', {user: props.user, request: props.request})
                    .then(res => props.requestHandler(props.setRequests, props.user))
                    .catch(err => console.log(err))
                }}> Complete </div>
                :null}
                {props.user.uuid === props.request.requesterId?
                <div className='btn' onClick={()=>{
                    Axios.delete('http://localhost:5000/api/requests/resolve', { data:{request: props.request}})
                    .then(res => props.requestHandler(props.setRequests, props.user))
                    .catch(err => console.log(err))
                }}>{props.request.completed? 'Resolve': 'Delete'}</div>
                : null}
            </div>
        
        
      
    </div>
)

}

export default cards;