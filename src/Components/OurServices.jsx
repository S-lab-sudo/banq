import React from 'react'
import Services from './Services'

function OurServices() {
  const ourService=[
    {
      serviceTitle:"I am Service 1",
      serviceDescription:"Services Testing"
    },
    {
      serviceTitle:"I am Service 2",
      serviceDescription:"Service 2 Testing"
    },
    {
      serviceTitle:"I am Service 1",
      serviceDescription:"Service 3 Testing"
    },
  ]
  return (
    <div id='services' >
      {ourService.map((v,i)=>{
        return <Services key={i} serviceTitle={v.serviceTitle} serviceDescription={v.serviceDescription} />
      })}
    </div>
  )
}

export default OurServices