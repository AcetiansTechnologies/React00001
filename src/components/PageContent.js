import React from 'react'

function PageContent(props) {
  return (
    <div className='contentarea'>
         <div className='sub-contentarea'>
            {props.elem}
         </div>
    </div>
  )
}

export default PageContent
