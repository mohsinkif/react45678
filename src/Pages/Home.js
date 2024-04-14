import React from 'react'
import { useActionData } from 'react-router-dom'

export default function Home() {

  const data = useActionData();
  console.log(data);
  return (
    <div>
      
    </div>
  )
}
