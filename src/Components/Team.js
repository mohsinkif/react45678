import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import img1 from "../Assets/p1.gif";
import img2 from "../Assets/p2.gif";
import img3 from "../Assets/p3.gif";
import img4 from "../Assets/p4.jpeg"
import img5 from "../Assets/p5.jpeg"
import img6 from "../Assets/p6.jpeg"
import img7 from "../Assets/p7.jpeg"

const Team = () => {
  return (
    <>
    <div className="parent flex justify-center flex-wrap my-6 gap-12" style={{marginLeft: '22%', marginRight:'22%', borderLeft:"1px solid grey"
    ,borderRight:"1px solid grey"}}>
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
        <div className="child">

        <img src={img2} alt="" className='rounded-full w-[12rem] h-[12rem]' />
        <div className="text-center py-4 font-serif">
        <p className='py-2'>janes Doe</p>
    <FaLinkedin size={20} style={{marginLeft:"5rem"}} className='cursor-pointer my-2 '/>
    <p className='py-2 '>Agriculture is future</p>
        </div>
        </div>
        <div className="child">

        <img src={img3} alt="" className='rounded-full w-[12rem] h-[12rem]' />
        <div className="text-center py-4 font-serif">
        <p className='py-2'>janes Doe</p>
    <FaLinkedin size={20} style={{marginLeft:"5rem"}} className='cursor-pointer my-2 '/>
    <p className='py-2 '>Agriculture is future</p>
        </div>
        </div>
        <div className="child">

        <img src={img4} alt="" className='rounded-full w-[12rem] h-[12rem]' />
        <div className="text-center py-4 font-serif">
        <p className='py-2'>janes Doe</p>
    <FaLinkedin size={20} style={{marginLeft:"5rem"}} className='cursor-pointer my-2 '/>
    <p className='py-2 '>Agriculture is future</p>
        </div>
        </div>
        <div className="child">

        <img src={img5} alt="" className='rounded-full w-[12rem] h-[12rem]' />
        <div className="text-center py-4 font-serif">
        <p className='py-2'>janes Doe</p>
    <FaLinkedin size={20} style={{marginLeft:"5rem"}} className='cursor-pointer my-2 '/>
    <p className='py-2 '>Agriculture is future</p>
        </div>
        </div>
        <div className="child">

        <img src={img6} alt="" className='rounded-full w-[12rem] h-[12rem]' />
        <div className="text-center py-4 font-serif">
        <p className='py-2'>janes Doe</p>
    <FaLinkedin size={20} style={{marginLeft:"5rem"}} className='cursor-pointer my-2 '/>
    <p className='py-2 '>Agriculture is future</p>
        </div>
        </div>
        <div className="child">

        <img src={img7} alt="" className='rounded-full w-[12rem] h-[12rem]' />
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