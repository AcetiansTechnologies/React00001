import React from 'react'

function VIP(props) {
  return (
    <div className='vips'>
      <ul>
        <li>
            <img src={props.chancellor.image}/>
        </li>
        <li>
            <ul>
                <li>{props.chancellor.name}</li>
                <li>{props.chancellor.description}</li>
            </ul>
        </li>
      </ul>
    </div>
  )
}

export default VIP
