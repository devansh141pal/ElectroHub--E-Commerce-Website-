import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [Search, setSearch] = useState("Search")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

  return (
    <nav className='flex items-center justify-around bg-linear-to-t from-sky-500 to-indigo-500 h-[60px]'>
        <a href='/' className="text-[22px]">
            ElctroHub
        </a>

        <ul className='flex items-center justify-center ml-[10px]'>
            <li className='ml-[10px] text-[16px] p-[10px] hover:rounded-full hover:border-2 hover:border-green-600 hover:cursor-pointer'><a href="/">Home</a></li>
            <li className='ml-[10px] text-[16px] p-[10px] hover:rounded-full hover:border-2 hover:border-green-600 hover:cursor-pointer'><a href="/products">Products</a></li>
            <li className='ml-[10px] text-[16px] p-[10px] hover:rounded-full hover:border-2 hover:border-green-600 hover:cursor-pointer'><a href="/deals">Deals</a></li>
            <li className='ml-[10px] text-[16px] p-[10px] hover:rounded-full hover:border-2 hover:border-green-600 hover:cursor-pointer'><a href="/about">About</a></li>
            <li className='ml-[10px] text-[16px] p-[10px] hover:rounded-full hover:border-2 hover:border-green-600 hover:cursor-pointer'><a href="/contact">Contact</a></li>
        </ul>

        <div className="flex items-center justify-center ml-[10px]">
            <input type="text" value={Search} onChange={handleChange} className='border-2 rounded-full px-[5px] w-[200px]' />
            <button className='border mx-[10px] hover:cursor-pointer px-[5px] py-[3px] rounded-full w-[80px]'>Search</button>
        </div>
    </nav>
  )
}

export default Navbar