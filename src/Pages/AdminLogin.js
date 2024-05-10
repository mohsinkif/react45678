import React from 'react'
import AuthenticationForm from '../Components/AuthenticationForm';
import { redirect, json } from 'react-router-dom';
import homescreen from '../Assets/homescreen.jpg';
import { backendurl } from '../constant';
export default function AdminLogin() {
  return (
    <AuthenticationForm/>
  )
}




export const adminLoginAction = async ({ request, params }) => {
  
  const formData = await request.json();
  const loginRequest = await fetch(`${backendurl}/adminlogin`, {
    method: request.method,
    // (`${backendurl}/get_transporter`
    // mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  });

  if (!loginRequest.ok) {
    return json({message:'Un Authorized Acces', status:loginRequest.status});
    
  }
  else {
    var date = new Date();
    date.setTime(date.getTime() + (2 * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toUTCString();
    const loginRequestData = await loginRequest.json();
    document.cookie = "adminToken" + "=" + (loginRequestData.token || "") + expires + "; path=/"; 

    return redirect('/adminHome')
  }


}

export const adminloginloader = async ({ request, params }) => {
  const cookieExists = document.cookie.split(';').some(cookie => cookie.trim().startsWith('adminToken'));
  if(cookieExists){
    return null
  }
  else {
    return redirect('/adminHome')
  }
}
