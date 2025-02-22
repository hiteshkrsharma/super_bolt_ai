import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-4 flex justify-between items-center'>
      <Image src={'/logo.png'} alt='Logo' width={40} height={40} />
      <div className='flex gap-5'>
        <button className="px-4 py-2 rounded-md hover:bg-red-400"> 
          Sign in 
        </button>
        <button 
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Get Started 
        </button>
      </div>
    </div>
  )
}

export default Header
