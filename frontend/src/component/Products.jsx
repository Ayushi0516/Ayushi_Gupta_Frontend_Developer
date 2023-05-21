import React from 'react'

export const Products = ({capsule,index}) => {
  return (
    <div >
         <div key={capsule.capsule_serial}>
          <h2>{capsule.capsule_serial}</h2>
          <p>Status: {capsule.status}</p>
          <p>Type: {capsule.type}</p>
          <hr />
         </div>
    </div>
  )
}
