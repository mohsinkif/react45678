import React from 'react';
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px 0', bottom: 0, left: 0, width: '100%' }}>
      <div id='contact' className='container mx-auto px-4 lg:px-28'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='py-3'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CiLocationOn size={30} color='green' />
              <span style={{ marginLeft: '10px' }}>BLUE AREA,ISLAMABAD </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <CiPhone size={30} color='green' />
              <span style={{ marginLeft: '10px' }}>+9450435043 </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <MdOutlineMail size={30} color='green' />
              <span style={{ marginLeft: '10px' }}>servies@agridrone.com </span>
            </div>
          </div>
          <div className='py-3'>
            <h3 className='text-green-700 text-2xl'>About Company</h3>
            <p>With a team of passionate experts in agriculture, data science, and drone technology, we leverage cutting-edge aerial imagery and machine learning algorithms to provide actionable intelligence for crop monitoring and decision-making.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
