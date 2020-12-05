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
                        Crafter: {props.request.claimed? props.request.worker : 'unclaimed'}
                        {props.request.claimed? <img src={`https://cdn.discordapp.com/avatars/${props.request.workerID}/${props.request.workerPicture}.png`} alt='worker'/>: <img src='https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png'/>}
                    </div>    
                </div>           
                    
                
            </div>
            

            <div className='requestOptions'>
                <div className={props.request.completed? 'completed' : 'uncompleted'}>{props.request.completed? 'Completed' : 'In Progress'}</div>
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
                <div className='btn'>{props.request.completed? 'Resolve': 'Delete'}</div>
            </div>
        
        
      
    </div>
)

}

export default cards;