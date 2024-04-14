import React, {useState} from 'react'
import { Link } from 'react-router-dom'


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


export const welcomePageLoader = async ({request, params}) => {
  function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}

const token = getCookie("token");
if (token) {
     return redirect('/home');
} else {
   return redirect('/userLogin');
}
return null
}