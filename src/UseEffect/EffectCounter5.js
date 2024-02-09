import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
function EffectCounter5() {
  const [post,setPost]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      console.log(res)
      setPost(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  if (post.length == 0) {
    return (
        <h1>FetchData......</h1>
    )
}
  return (
    <div className="text-capitalize text-center mt-5">
            <ul>
              {
                post.map(post=><li key={post.id}>{post.title}</li>)
              }
            </ul>
    </div>
  )
}

export default EffectCounter5