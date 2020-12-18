import Axios from 'axios'
import React, {useState} from 'react'


function Cards (props){
    const [setView, setSetView] = useState(false)
    console.log(props.request.setItems)
return(
    <div className=' itemCard'>
        <div className='itemContainer'>
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
                    Axios.put('https://xivreq.herokuapp.com/api/requests/claim', {user: props.user, requestId: props.request.id})
                    .then(res => props.requestHandler(props.setRequests, props.user))
                    .catch(err => console.log(err))
                }}> Claim </div>
                :null}
                {props.user.uuid === props.request.workerID ? 
                <div className={props.request.completed?'completedBTN':'btn'} onClick={()=>{
                    Axios.put('https://xivreq.herokuapp.com/api/requests/complete', {user: props.user, request: props.request})
                    .then(res => props.requestHandler(props.setRequests, props.user))
                    .catch(err => console.log(err))
                }}> Complete </div>
                :null}
                {props.user.uuid === props.request.requesterId?
                <div className='btn' onClick={()=>{
                    Axios.delete('https://xivreq.herokuapp.com/api/requests/resolve', { data:{request: props.request}})
                    .then(res => props.requestHandler(props.setRequests, props.user))
                    .catch(err => console.log(err))
                }}>{props.request.completed? 'Resolve': 'Delete'}</div>
                : null}
            </div>
        </div>
            { props.request.set ?
                <div>
                    { setView? 
                        <>
                        <div className='drop' onClick={()=> setSetView(false)}> <i class="arrow up"/> Click to Minimize <i class="arrow up"/> </div>
                        <div className='setContainer'> 
                            
                            <div className='leftSet'>
                                <div className='itemInfo'>
                                    <img src={props.request.setItems.wpnIcon} alt='weapon'/>
                                    <h6>{props.request.setItems.wpnName}</h6>
                                </div>
                                <div className='itemInfo'>
                                    <img src={props.request.setItems.headIcon} alt='head'/>
                                    <h6>{props.request.setItems.headName}</h6>
                                </div>
                                <div className='itemInfo'>
                                    <img src={props.request.setItems.chestIcon} alt='chest'/>
                                    <h6>{props.request.setItems.chestName}</h6>
                                </div>
                                <div className='itemInfo'>
                                    <img src={props.request.setItems.handsIcon} alt='hands'/>
                                    <h6>{props.request.setItems.handsName}</h6>
                                </div>
                                <div className='itemInfo'>
                                    <img src={props.request.setItems.legsIcon} alt='legs'/>
                                    <h6>{props.request.setItems.legsName}</h6>
                                </div>
                                <div className='itemInfo'>
                                    <img src={props.request.setItems.feetIcon} alt='feet' />
                                    <h6>{props.request.setItems.feetName}</h6>
                                </div>
                                <div className='itemInfo'>
                                    <img src={props.request.setItems.beltIcon} alt='belt'/>
                                    <h6>{props.request.setItems.beltName}</h6>
                                </div>
                            </div>
                            <div className='rightSet'>
                                {
                                    props.request.setItems.shdName ? 
                                    <div className='itemInfo'>
                                    <h6>{props.request.setItems.shdName}</h6>
                                    <img src={props.request.setItems.shdIcon} alt='shield'/>
                                </div>
                                :null
                                }
                                <div className='itemInfo'>
                                    <h6>{props.request.setItems.earName}</h6>
                                    <img src={props.request.setItems.earIcon} alt='earrings' />
                                </div>
                                <div className='itemInfo'>                                  
                                    <h6>{props.request.setItems.neckName}</h6>
                                    <img src={props.request.setItems.neckIcon} alt='necklace'/>
                                </div>
                                <div className='itemInfo'>
                                    <h6>{props.request.setItems.wristName}</h6>
                                    <img src={props.request.setItems.wristIcon} alt='bracelet'/>
                                </div>
                                <div className='itemInfo'>
                                    <h6>{props.request.setItems.ringName}</h6>
                                    <img src={props.request.setItems.ringIcon} alt='ring'/>
                                </div>
                                <div className='itemInfo'>
                                    <h6>{props.request.setItems.ringName}</h6>
                                    <img src={props.request.setItems.ringIcon} alt='ring'/>
                                </div>
                            </div>
                            
                            
                            
                            
                        
                        </div>
                        </>
                        :
                        <div  className='drop' onClick={()=> setSetView(true)}> <i class="arrow down"/> Click to Expand <i class="arrow down"/></div>
                    }
                </div>
            :
            null
            }
        
      
    </div>
)

}

export default Cards;