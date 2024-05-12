// import React from 'react'

import FoodCard from "./FoodCard";

// import image from '../assets/img/Biryani .jpg'
export default function Article() {
  return (
    <div className='min-h-[calc(100vh-65px)] bg-red-200 grid grid-cols-5  gap-2'>

      <FoodCard title='Hydrabadi Biryani' Price='200'/>
      <FoodCard title='Kacci Biryany' Price='300'/>
      <FoodCard title=' Matton Biryany' Price='400'/>
      <FoodCard title='Kolkata Biryani' Price='340'/>
      <FoodCard title='Masala Biryani' Price=' 350'/>
      <FoodCard title='chiken Biryany' Price='150'/>
      <FoodCard title='djkh;wj' Price='222'/>


    </div>
  )
}
