import React from 'react'
import logo from '../assets/img/e.png'

export default function Header() {
  return (
    <div>
     <header className='flex justify-between items-center px-3'>
        <div>
            <a href="#">
                <img className='w-9 ' src={logo} alt="logo" />
            </a>
        </div>
        <div>logo</div>
        <div>
            <ul className='flex'>
                <li className='text-blue-800 mr-3 hover:underline cursor-pointer'>About</li>
                <li className='text-blue-800 mr-3 hover:underline cursor-pointer'>Home</li>
                <li className='text-blue-800 mr-3 hover:underline cursor-pointer'>Countact</li>
            </ul>
        </div>
      </header>
    </div>
  )
}
