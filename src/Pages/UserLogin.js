import React from 'react'
import AuthenticationForm from '../Components/AuthenticationForm';
import { redirect } from 'react-router-dom';

export default function UserLogin() {
  return (
    <AuthenticationForm/>
      
  )
}


export const loginAction = async ({ request, params }) => {
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

    const loginRequestData = await loginRequest.json();
    return loginRequestData;
  } catch (error) {
    console.error('Error:', error);
    return redirect("/adminLogin")
  }
}