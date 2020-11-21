import React from 'react'

const user = (props) => {
    return(
        <div className='userCard'>
            <div className='userInfo'>
                <h2>{props.userName}</h2>
                <a onClick={()=> props.setLogin(false)}>Click to Logout</a>
            </div>
            <img className='userAvatar' src={props.userAvatar} />
        </div>
    )
}

export default user