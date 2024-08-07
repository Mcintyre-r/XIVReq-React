import React from 'react'

const user = (props) => {
    return(
        <div className='userCard'>
            <h2 className='userInfo'>{props.userName}</h2>
            <img className='userAvatar' src={props.userAvatar} alt='user'/>
        </div>
    )
}

export default user
