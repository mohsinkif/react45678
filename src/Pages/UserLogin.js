import React from 'react'
import AuthenticationForm from '../Components/AuthenticationForm';

export default function UserLogin() {
  return (
    <AuthenticationForm/>
      
  )
}


export const loginAction = async ({ request, params }) => {
  const formData = await request.formData();
  console.log(formData);
}