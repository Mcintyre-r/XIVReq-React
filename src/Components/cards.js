import React from 'react'

const cards = (props) => {

    console.log(props.request)

return(
    <div>
        <h1>{props.request.item}</h1>
    </div>
)

}

export default cards;