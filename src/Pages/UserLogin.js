import React from 'react'
import AuthenticationForm from '../Components/AuthenticationForm';
import { json, redirect } from 'react-router-dom';
import { backendurl } from '../constant';
export default function UserLogin() {

  


  return (
    <AuthenticationForm/>
      
  )
}


export const loginLoaderFunction = ({params,request}) => {
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
   return redirect('/');
}
}


export const loginAction = async ({ request, params }) => {
  
  const formData = await request.json();
  // (`${backendurl}/get_transporter`
  const loginRequest = await fetch(`${backendurl}/login`, {
    method: request.method,
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
    document.cookie = "token" + "=" + (loginRequestData.token || "") + expires + "; path=/"; 

  }

  return redirect('/userhome')


  
}


/*
try {
  const formData = await request.json();
  console.log(formData);

  const loginRequest = await fetch('http://127.0.0.1:8001/login', {
    method: request.method,
    // mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  });

  if (!loginRequest.ok) {
    throw new Error('Failed to fetch');
  }
  if(loginRequest.status === "200_OK"){
    const loginRequestData = await loginRequest.json();
    return redirect('/home');
  }

} catch (error) {
  console.error('Error:', error);
  return json({ error: 'An error occurred while fetching data' });
} */