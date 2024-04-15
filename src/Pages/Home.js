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
  const tokenExist = document.cookie.split(';').some((item) => item.trim().startsWith("token" + '='));
  if(!tokenExist){
    return redirect("/");
  }
  else {
    return tokenExist;
  }
}