import React from 'react'

function QuickButton(props) {
  return (
    <div className='quicklinks'>
      <img src={props.link.image}/>
      <p >{props.link.name}</p>
    </div>
  )
}

export default QuickButton
