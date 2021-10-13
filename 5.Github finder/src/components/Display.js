import React from 'react'

const Display=({data,repo})=> {
  
  const value = {data}
  return (
    <div>
    <h1>Here are the details of that person that you have search:- </h1>
    	<h2>Name:{value.name}</h2>
     </div>
  )
}

export default Display
