import React from 'react'
import AuthenticationForm from '../Components/AuthenticationForm';
import { json, redirect } from 'react-router-dom';

export default function UserLogin() {
  return (
    <AuthenticationForm/>
      
  )
}


export const loginAction = async ({ request, params }) => {
  
  const formData = await request.json();
  const loginRequest = await fetch('http://127.0.0.1:8001/login', {
    method: request.method,
    // mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  });

  if (!loginRequest.ok) {
    return json({message:'UnAuthorized Acces', status:loginRequest.status})
  }
  return redirect('/home');


  
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