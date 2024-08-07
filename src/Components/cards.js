import Axios from 'axios'
import React, {useState} from 'react'


function Cards (props){
    const [setView, setSetView] = useState(false)
return(
    <div className=' itemCard'>
        <div className='itemContainer'>
            <div className='topCardContainer'>
                <img src={`https://cdn.discordapp.com/avatars/${props.request.requesterId}/${props.request.requesterPicture}.png`}  className='cardAvatar' alt='item icon'/>
                <div className='requestDescrip'>
                    
                    <div className='itemName'>
                    {props.request.quantity?
                        <h6>{props.request.potName}</h6>
                    :<></>}
                    </div>
                    <div className='quantity'>
                    {props.request.quantity?
                        <h6>Quantity: {props.request.quantity}</h6>
                    :<></>}
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
                    Axios.put(`${process.env.REACT_APP_BASEAPIURL}/api/requests/claim`, {user: props.user, requestId: props.request.id, request: props.request})
                    .then(res => props.requestHandler(props.setRequests, props.user))
                    .catch(err => console.log(err))
                }}> Claim </div>
                :null}
                {props.user.uuid === props.request.workerID ? 
                <div className={props.request.completed?'completedBTN':'btn'} onClick={()=>{
                    Axios.put(`${process.env.REACT_APP_BASEAPIURL}/api/requests/complete`, {user: props.user, request: props.request})
                    .then(res => props.requestHandler(props.setRequests, props.user))
                    .catch(err => console.log(err))
                }}> Complete </div>
                :null}
                {props.user.uuid === props.request.requesterId?
                <div className='btn' onClick={()=>{
                    Axios.delete(`${process.env.REACT_APP_BASEAPIURL}/api/requests/resolve`, { data:{request: props.request}})
                    .then(res => props.requestHandler(props.setRequests, props.user))
                    .catch(err => console.log(err))
                }}>{props.request.completed? 'Resolve': 'Delete'}</div>
                : null}
            </div>
        </div>
        <div>
            {props.request.quantity?
                        <></>
                        :

                <div>
                    { setView? 
                        <>
                        <div className='drop' onClick={()=> setSetView(false)}> <i class="arrow up"/> Click to Minimize <i class="arrow up"/> </div>
                        <div className='setContainer'> 
                            
                            <div className='leftSet'>
                                {props.request.MainHandIcon?
                                <div className='itemInfo'>
                                    <img src={`https://xivapi.com${props.request.MainHandIcon}`} alt='Weapon'/>
                                    <h6>{props.request.MainHandName}</h6>
                                </div>
                                :null}
                                
                                {props.request.HeadIcon?
                                <div className='itemInfo'>
                                    <img src={`https://xivapi.com${props.request.HeadIcon}`} alt='Head'/>
                                    <h6>{props.request.HeadName}</h6>
                                </div>
                                :null}
                                
                                {props.request.BodyIcon?
                                <div className='itemInfo'>
                                    <img src={`https://xivapi.com${props.request.BodyIcon}`} alt='Body'/>
                                    <h6>{props.request.BodyName}</h6>
                                </div>
                                :null}
                                
                                {props.request.GlovesIcon?
                                <div className='itemInfo'>
                                    <img src={`https://xivapi.com${props.request.GlovesIcon}`} alt='Gloves'/>
                                    <h6>{props.request.GlovesName}</h6>
                                </div>
                                :null}
                                
                                {props.request.LegsIcon?
                                <div className='itemInfo'>
                                    <img src={`https://xivapi.com${props.request.LegsIcon}`} alt='Legs'/>
                                    <h6>{props.request.LegsName}</h6>
                                </div>
                                :null}
                                
                                {props.request.FeetIcon?
                                <div className='itemInfo'>
                                    <img src={`https://xivapi.com${props.request.FeetIcon}`} alt='Feet' />
                                    <h6>{props.request.FeetName}</h6>
                                </div>
                                :null}
                                
                            </div>
                            <div className='rightSet'>
                                {props.request.OffHandName ? 
                                <div className='itemInfo'>
                                    <h6>{props.request.OffHandName}</h6>
                                    <img src={`https://xivapi.com${props.request.OffHandIcon}`} alt='Offhand'/>
                                </div>
                                :null}
                                {props.request.EarsName?
                                <div className='itemInfo'>
                                    <h6>{props.request.EarsName}</h6>
                                    <img src={`https://xivapi.com${props.request.EarsIcon}`} alt='Earrings' />
                                </div>
                                :null}
                                
                                {props.request.NeckName?
                                <div className='itemInfo'>                                  
                                    <h6>{props.request.NeckName}</h6>
                                    <img src={`https://xivapi.com${props.request.NeckIcon}`} alt='Necklace'/>
                                </div>
                                :null}
                                
                                {props.request.WristsName?
                                <div className='itemInfo'>
                                  <h6>{props.request.WristsName}</h6>
                                  <img src={`https://xivapi.com${props.request.WristsIcon}`} alt='Bracelet'/>
                                </div>
                                :null}
                              
                                {props.request.FingerLName?
                                <div className='itemInfo'>
                                    <h6>{props.request.FingerLName}</h6>
                                    <img src={`https://xivapi.com${props.request.FingerLIcon}`} alt='Left Ring'/>
                                </div>
                                :null}
                                
                                {props.request.FingerRName?
                                <div className='itemInfo'>
                                    <h6>{props.request.FingerRName}</h6>
                                    <img src={`https://xivapi.com${props.request.FingerRIcon}`} alt='Right Ring'/>
                                </div>
                                :null}
                                
                            </div>
                            
                            
                            
                            
                        
                        </div>
                        </>
                        :
                        <div  className='drop' onClick={()=> setSetView(true)}> <i class="arrow down"/> Click to Expand <i class="arrow down"/></div>
                    }
                </div>
                
            }
        </div>
    </div>
)

}

export default Cards;
