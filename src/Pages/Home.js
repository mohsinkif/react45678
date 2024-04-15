import React, { useEffect } from 'react'
import { redirect, useActionData, useLoaderData } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Map from '../Components/Map'

export default function Home() {

  const token = useLoaderData();
  useEffect(()=>{
    console.log(token);

  },[]);
  
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
if (token) {
  console.log(token)
     redirect('/home');
} else {
   return redirect('/');
}
return token;
}