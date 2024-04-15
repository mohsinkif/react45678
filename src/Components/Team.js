import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import img1 from "../Assets/p1.gif";
import img2 from "../Assets/p2.gif";
import img3 from "../Assets/p3.gif";


const Team = () => {
  return (
    <>
    <div className="parent flex justify-center flex-wrap my-6 gap-12">
        <div className="child">

        <img src={img1} alt="" className='rounded-full w-[12rem] h-[12rem]' />
        <div className="text-center py-4 font-serif">
        <p className='py-2'>james Doe</p>
    <FaLinkedin size={20} style={{marginLeft:"5rem"}} className='cursor-pointer my-2 '/>
    <p className='py-2 '>Agriculture is future</p>
        </div>
        </div>

        <div className="child">

        <img src={img3} alt="" className='rounded-full w-[12rem] h-[12rem]' />
        <div className="text-center py-4 font-serif">
        <p className='py-2'>John Doe</p>
    <FaLinkedin size={20} style={{marginLeft:"5rem"}} className='cursor-pointer my-2 '/>
    <p className='py-2 '>Agriculture is future</p>
        </div>
        </div>

        <div className="child">

        <img src={img2} alt="" className='rounded-full w-[12rem] h-[12rem]' />
        <div className="text-center py-4 font-serif">
        <p className='py-2'>janes Doe</p>
    <FaLinkedin size={20} style={{marginLeft:"5rem"}} className='cursor-pointer my-2 '/>
    <p className='py-2 '>Agriculture is future</p>
        </div>
        </div>

    </div>
    </>
  )
}

export default Team