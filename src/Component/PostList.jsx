import React from 'react'
import {useEffect,useState} from 'react'




export default function PostList() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [refatch, setRefatch] = useState(false)

    const fetchData = async ()=>{
        setLoading(true)
        try {
            const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
            const jsonResponse = await res.json()
            setPosts(jsonResponse)
            console.log(jsonResponse)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }



    useEffect(()=>{
        fetchData()
        // alert('tell me your age')
    },[refatch])

  return ( 
    <div>
      <h1 className=' text-center text-green-500  my-7 '>this is md shakil khan </h1>

      <button onClick={()=>setRefatch((prev)=>!prev)} className=' bg-blue-500 rounded-lg px-3 py-2 mx-5'>Re-fatch</button>
      {
        loading ?  <h2>Loading.....</h2> : null 
      }
      {
              posts.map((post)=>{
                return <h3 key={post.id}>{post.title}</h3>
              })
      }

    </div>
  )
}
