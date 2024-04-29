import React from 'react'
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div id='contact' className=' bg-black '>
        <div className='grid grid-cols-2 lg:px-28'>
        <div className='text-white grid-col-1 py-3'>
    <span style={{ verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}>
        <CiLocationOn size={30} color='green' /> 
        <span style={{ marginLeft: '10px' }}>Street line 1, Islamabad </span> 
    </span>

<div className='my-3'>

    <span style={{ verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}>
        <CiPhone size={30} color='green'/> 
        <span style={{ marginLeft: '10px' }}>9450435043 </span> 
    </span>
    </div>
    <div>

<span style={{ verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}>
    <MdOutlineMail size={30} color='green'/> 
    <span style={{ marginLeft: '10px' }}>abc@gmail.com </span> 
</span>
</div>

</div>

    <div className='text-white grid-col-1 py-3'>
        <h3 className='text-green-700 text-2xl'>About Company</h3>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maxime dolorem id. Ratione vero eos nostrum blanditiis dolores id consequatur aliquam error assumenda repudiandae. 
    </div>
        </div>
    </div>

    </>
  )
}

export default Footer