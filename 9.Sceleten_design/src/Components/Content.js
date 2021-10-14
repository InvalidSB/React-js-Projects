import React,{useState,useEffect} from 'react'
import axios from "axios"
import ContentSceleton from '../sceletons/ContentSceleton';

function Content() {
    const [posts,setPosts]=useState()

    useEffect(() => {
        setTimeout(() => {
            axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
                console.log(res.data)
                setPosts(res.data)
            }).catch((err)=>console.log(err))
            
        }, 3000);
        

    }, [])

    return (
        <div className="contentpart">
            <h1>Posts</h1>
            <hr/>
            <div className="slightlyinner">
            {posts && posts.map((post)=>{
                return (

                    <div className="singlepost">
                    <h3 style={{fontSize:16,fontWeight:300,textTransform:'uppercase',marginBottom:12}}>{post.title}</h3>
                    <p style={{lineHeight:1.8}}>{post.body}</p>
                    </div>
                )
            }) 
}
{!posts && [1,2,3,4,5,6].map((n)=><ContentSceleton key={n} />)}

            </div>
        </div>
    )
}

export default Content
