import React from 'react'
import { redirect, useActionData } from 'react-router-dom'
import Navbar from '../Components/Navbar'
export default function Home() {

  return (
    <div>
      <Navbar/>
      
    </div>
  )
}

export const homePageLoaderFunction = ({params,request}) => {
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
if (token !== null) {
     redirect('/home');
} else {
   return redirect('/userLogin');
}
return token;
}