import React, { useState } from 'react'
import forwardIcon from '../Assets/forward.svg'

function Services({serviceTitle,serviceDescription}) {
    const [showDescription, setShowDescription] = useState(false)
      return (
    <div className='serviceCard' onClick={()=>setShowDescription(!showDescription)}  >
        <div id='serviceTitleAndIcon' >
          <h2 id="serviceTitle" style={{margin:'0'}} >{serviceTitle} </h2>
          <img style={{rotate:showDescription?"":"-90deg"}} src={forwardIcon} alt="" />
        </div>
        {showDescription&&<div id="serviceDescription">{serviceDescription}</div>}
    </div>
  )
}

export default Services