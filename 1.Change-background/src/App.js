import React,{useState} from 'react';
import './App.css';

function App() {
  const[color,setColor]= useState()
  
  const handleChange=(e)=>{
      setColor(e.target.value)
  }
  const style ={
    background:color
    }
  return (

    <>
      <div className="App" style={style}>
        <div className="vitra">
          <input type="text" value={color} onChange={handleChange}/>
          <h1 >Hello,Here we Change backgroud-Color according to your input.</h1>
        </div>
      </div>
    </>
  );
}

export default App;
