import React from 'react'
import {useEffect,useState} from 'react'
import Axios from 'axios';
import './App.css'

function App() {
  const[advice,setAdvice]=useState()

  useEffect(() => {
   getAdvice()
  }, [])

  const getAdvice=async()=>{
      const response =await Axios.get(`https://api.adviceslip.com/advice`)
      const {advice}=response.data.slip
      setAdvice(advice);
      console.log(response);
  }
  const handleClick=()=>{
    window.location.reload()
     getAdvice()
  }

  return (
    <>
    <div className="container">
      <h1>Some popular advice to you buddy</h1>
      <div className="vitra">
        <h1> {advice}</h1>
      </div>
        <button onClick={handleClick}> Click for Another</button>
    </div>
    </>
  )
}

export default App
