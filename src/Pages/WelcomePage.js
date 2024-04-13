import React, {useState} from 'react'

export default function WwelcomePage() {
  return (
    <div>
      <div className='flex justify-center space-x-20 items-center my-40' >
      <button className='rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white'  >Login</button>
      <button className='rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white'  >Admin</button>
      </div>
    </div>
  )
}
