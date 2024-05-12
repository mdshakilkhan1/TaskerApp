import React, { useState } from 'react'

export default function Counter() {
    const [count ,setCount] = useState(0)

    const handleInc= ()=>{
        setCount((prev)=>{
            return prev + 1
        })
    }

    const handleDec= ()=>{
        setCount((prev)=>{
            return prev - 1
        })
    }

  return (
    <div>
        <h2 className='text'>{count}</h2>
      <div>

          <button onClick={handleInc} >+</button>
          <button onClick={handleDec} >-</button>
      </div>
    </div>
  )
}
