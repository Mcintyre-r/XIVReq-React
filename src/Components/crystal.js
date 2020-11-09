import React from 'react'


const crystal = (props) => {
    return(
        <div id="crystals">
            <div ref={props.crystals[0]} class="crystal_01"/>
            <div ref={props.crystals[1]} class="crystal_02"/>
            <div ref={props.crystals[2]} class="crystal_03"/> 
        </div>
    )
}

export default crystal