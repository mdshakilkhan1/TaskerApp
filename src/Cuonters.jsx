import React from 'react'
import { useState } from 'react'

export default function Cuonters() {
const [count, setCount] = useState(0)
    const handleIncrement= ()=>{
        setCount(( prev)=>{
            return prev + 1
        })
    }

    const handleDecrement= ()=>{
        setCount(( prev)=>{
            return prev - 1
        })
    }
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={handleIncrement} className=' text-center text-'>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  )
}
