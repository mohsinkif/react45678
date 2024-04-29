import React, {useEffect, useState} from 'react'
import { Link, redirect } from 'react-router-dom'


export default function WelcomePage() {

 

  return (
    <div>
      <div className='flex justify-center space-x-20 items-center my-40' >
      <Link to='/userLogin'>
        <button className='rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white'  >Login</button>
      </Link>
      <Link to="/adminLogin">
        <button className='rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white'  >Admin</button>
      </Link>
      </div>
    </div>
  )
}

export const welcomeLoader = async () => {
  const userToken = document.cookie.split(';').some((item) => item.trim().startsWith("token" + '='));
  const adminToken = document.cookie.split(';').some((item) => item.trim().startsWith("adminToken" + '='));

  if(userToken){
    return redirect('/userhome');
  }
  else if(adminToken) {
    return redirect('/adminHome');
  }
  else{
    return null
  }
}

