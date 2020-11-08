import React from 'react'


const crystal = (props) => {
    return(
        <div id="crystals">
            <div ref={props.crystal_01} class="crystal_01"/>
            <div ref={props.crystal_02} class="crystal_02"/>
            <div ref={props.crystal_03} class="crystal_03"/> 
        </div>
    )
}

export default crystal