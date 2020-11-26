import React from 'react'

const cards = (props) => {

    // console.log(props.request)
return(
    <div className='card'>
        <div className='topCardContainer'>
            <img src={props.request.itemIcon}  className='itemIcon'/>
            <div className='requestDescrip'>
                <div className='itemName'>
                    <h6>{props.request.item}</h6>
                </div>
                <div className='Quantity'>
                    <h6>{props.request.quantity} {props.request.quantity === 1 ? 'item' : 'items'}</h6>
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
                        // console.log(props.teamCraft)
                    }}>Deselect</div>:
                    <div className='btn' onClick={()=> {
                        props.setTC([...props.teamCraft, props.request])
                        // console.log(props.teamCraft)
                    }}>Select</div>
            }
                <div className='btn'>Delete</div>
            </div>
        </div>
        <div className='bottomCardContainer'>
            <div className='requester'>
                Requester: {props.request.requestedBy}
            </div>
            <div className='crafter'>
                Crafter: UNCLAIMED
            </div>
        </div>
      
    </div>
)

}

export default cards;