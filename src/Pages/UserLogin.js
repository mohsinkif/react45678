import React from 'react'
import AuthenticationForm from '../Components/AuthenticationForm';
import { redirect } from 'react-router-dom';

export default function UserLogin() {
  return (
    <AuthenticationForm/>
      
  )
}


export const loginAction = async ({ request, params }) => {
  const formData = await request.json();
  console.log(formData);

  const loginRequest = fetch('http://127.0.0.1:8001/login',{
    method:request.method,
    mode:'cors',
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  })
  const loginRequestData = await loginRequest.json();
  if(!loginRequestData.status){
    redirect('/adminLLoginPage')
  }
  return loginRequestData;
}