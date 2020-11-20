import React from 'react'


const crystal = (props) => {

    return(
        <div id="crystals">
            <div ref={newCrystal => props.crystals[0](newCrystal)} class="crystal_01"/>
            <div ref={newCrystal => props.crystals[1](newCrystal)} class="crystal_02"/>
            <div ref={newCrystal => props.crystals[2](newCrystal)} class="crystal_03"/> 
        </div>
    )
}

export default crystal;