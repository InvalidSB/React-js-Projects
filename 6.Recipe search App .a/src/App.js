import React, { useState ,useEffect} from 'react';
import Header from './Components/Header'
import './App.css';
import Recipes from './Components/Recipes';
import Axios from 'axios'

function App() {
  const [search,setSearch]= useState()
  const [recipes,setRecipes]=useState([])
  const [recom,setRecom]=useState("recommended Recipes")

  const APP_ID ="2fa14566";
  const APP_KEY ="41dbfa65341f87bd37e8d9c6ce91a0af"

   const handleChange=(e)=>{
    // console.log(e.target.value)
    setSearch(e.target.value)
  }
//   useEffect(()=>{
//     getData();
// },[])

  const getData=async()=>{
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
     setRecipes(res.data.hits)
  }

const clickHandler=()=>{
  getData();
  setRecom('Recipes')
}
  return (
    <div className="App">
    <Header search={search} handleChange={handleChange} clickHandler={clickHandler}/>
  <h1>Here are the  {recom}</h1>
      <Recipes recipes={recipes} key={Math.random()*10+1}/>
    </div>
  );
} 

export default App;
