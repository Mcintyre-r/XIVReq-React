import React from 'react'

const user = (props) => {
    return(
        <div className='userCard'>
            <div className='userInfo'>
                <h2>{props.userName}</h2>
            </div>
            <img className='userAvatar' src={props.userAvatar} alt='user'/>
        </div>
    )
}

export default user