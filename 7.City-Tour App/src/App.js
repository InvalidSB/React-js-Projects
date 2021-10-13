import React from 'react';
import Navbar from './Components/Navbar'
import Tourlist from './Components/Tourlist'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import './App.css';


const App =()=>{
  return(
    <>
	    <BrowserRouter>
	      <Navbar/>
	      <Route exact path="/" ><Home/></Route>
	      <Route exact path="/About"><About/></Route>                                            
	      <Route exact path="/City"><Tourlist/></Route>
	    </BrowserRouter>
    </>
  )
}
export default App;
