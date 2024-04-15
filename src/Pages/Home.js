import React from 'react'
import { redirect, useActionData } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Map from '../Components/Map'

export default function Home() {

  return (
    <div>
      <Navbar/>
      
    </div>
  )
}

export const homePageLoaderFunction = ({params,request}) => {
  const tokenExist = document.cookie.split(';').some((item) => item.trim().startsWith("token" + '='));
  if(tokenExist){
    return redirect("/home");
  }
  else {
    return redirect("/");
  }
}