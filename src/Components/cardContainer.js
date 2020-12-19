import React, {useState} from 'react'
import Cards from './cards'

function CardContainer(props) {
    const [claimDrop, setClaimDrop] = useState(true)
    const [unclaimDrop, setUnclaimDrop] = useState(true)
    let claimCount = 0
    let unclaimCount = 0

    props.requests.map(request => {
        if(request.workerID === props.user.uuid && request.completed === false){
            claimCount++
        }else if(!request.workerID){
            unclaimCount++
        }
    })

 return(
     <div className='rightContainer'>
        <div className='buttonContainer'>
        <div className={props.teamCraft.length?'exportBtn':'exportBtn disabled'} onClick={ ()=> { props.setTC([])}}> Deselect All </div>
            <div className={props.teamCraft.length?'exportBtn':'exportBtn disabled'} onClick={ ()=> { props.exportHandler(props.teamCraft)}}> Export </div>
            <a className='exportBtn' href='https://xivreq.com' onClick={()=> { 
                            localStorage.removeItem('xivReqUser');
                        }
                        }>Logout</a>
        </div>
        {props.user.crafter?
        <div className='cardContainer'>
            {claimCount===0? 
            <div className='bar'>
                <div>Claimed Requests:</div>
                <div>You currently have no claimed requests</div>
            </div>
            :
            <div className='bar'onClick={()=>setClaimDrop(!claimDrop)}>
                <div>Claimed Requests:</div>
                <div>{claimDrop?'click to minimize':'click to expand'}</div>
            </div>
            }  
            <div className={claimDrop?'':'hidden'}>
            {props.requests.map((request)=>{ 
                if(request.workerID === props.user.uuid && request.completed === false){

                return <Cards request={request} setRequests={props.setRequests} user={props.user} teamCraft={props.teamCraft} requestHandler={props.requestHandler} setTC={props.setTC}/>
                }
            })
            }  
            </div>  
            {unclaimCount===0?
            <div className='bar'>
                <div>Unclaimed Requests:</div>
                <div>There are currently no unclaimed requests</div>
            </div>
            :
            <div className='bar'onClick={()=>setUnclaimDrop(!unclaimDrop)}>
                <div>Unclaimed Requests:</div>
                <div>{unclaimDrop?'click to minimize':'click to expand'}</div>
            </div>
            }  
            <div className={unclaimDrop?'':'hidden'}>
            {props.requests.map((request)=>{ 
                if(!request.workerID ){
                return <Cards request={request} setRequests={props.setRequests} user={props.user} teamCraft={props.teamCraft} requestHandler={props.requestHandler} setTC={props.setTC}/>
                }
            })
            }  
            </div>  
        </div>
        :
        <div className='cardContainer'>
            {props.requests.map((request)=>{ 
                if(request.requesterId === props.user.uuid){
                return <Cards request={request} setRequests={props.setRequests} user={props.user} teamCraft={props.teamCraft} requestHandler={props.requestHandler} setTC={props.setTC}/>
                }
            })
            }  
        </div>
        }   
     </div>
 )
}

export default CardContainer;