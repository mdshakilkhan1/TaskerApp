import React from 'react'
import {useEffect,useState} from 'react'




export default function UseEfect() {
    const [posts, setPosts] = useState([])

    const fetchData = async ()=>{
        try {
            const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
            const jsonResponse = await res.json()
            setPosts(jsonResponse)
            console.log(jsonResponse)
        } catch (error) {
            console.log(error)
        }}


    useEffect(()=>{
        fetchData()
    },[])

  return ( 
    <div>
      <h2>this is md shakil khan </h2>
      {
              posts.map((post)=>{
                return <h3 key={post.id}>{post.title}</h3>
              })
      }

    </div>
  )
}
