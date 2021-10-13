import React from 'react'
import {useState} from 'react'
import Display from './Display'
function Profile() {
    const [username,setUsername] =useState()
    const [data,setData]= useState()
    const [repo,setRepo]=useState();


    const handleChange =(e)=>{
        setUsername(e.target.value)
    }
    const handleClick=async()=>{
        const person = await fetch(`https://api.github.com/users/${username}`)
        const personJson =await person.json();
        const repo = await fetch(personJson.repos_url)
        const repoJson = await repo.json();
        
        if(personJson){
            setData(personJson);
            setRepo(repoJson)
        }
    }
    
    return (
        <div>
            <input value={username} onChange={handleChange}/>
            
            <button type="submit" onClick={handleClick}>Search</button>
            
            <Display data={data} repositories={repo}/>
        </div>
    )
}

export default Profile
