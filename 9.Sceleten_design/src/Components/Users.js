import React,{useState,useEffect} from 'react'
import axios from "axios"
import UserSkeleton from '../sceletons/UserSkeleton'

function Users() {
    const[user,setUsers]=useState(null)
    useEffect(() => {
        setTimeout(() => {
            axios.get("https://jsonplaceholder.typicode.com/users/2").then((res)=>{
                setUsers(res.data)
            }).catch((err)=>console.log(err))
            
        }, 3000);
        

    }, [])
    return (
        <div className="userpart">
            <h1>Users</h1>
            <hr/>

            <div>
{user && (
    <div className="slightlyinner">
        <h3 style={{style:16,fontWeight:300,textTransform:'uppercase'}}>{user.username}</h3>
        <p>{user.email}</p>
        <a href={user.website}>{user.website}</a>
        </div>
)
}
{!user && <UserSkeleton theme="dark" />}

        </div>
        </div>
    )
}

export default Users
