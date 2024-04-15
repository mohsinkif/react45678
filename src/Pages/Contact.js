import React, { useEffect } from "react";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <>
        <Navbar/>
      <><div id="contact" className="my-10 bg-gray-200">
        <div data-aos="flip-left">
          <h3 className="text-center py-16 text-4xl font-bold ">
            <span className="text-green-700 ">C</span>ONTACT{" "}
            <span className="text-green-700 ">U</span>S
          </h3>

          <div className="grid grid-cols-3 py-5 lg:px-28">
            <div className="py-3 ">
              <CiPhone size={50} />

              <p className="font-bold py-4">Phone</p>
              <div className="py-3">48549443</div>
              <div className="py-3">656565</div>
            </div>
            <div className="py-3">
              <CiLocationOn size={50} />
              <p className="font-bold py-4">Address</p>
              <div className="py-3">
                Islamabad
                <div className="py-3">address line steet#1</div>
              </div>
            </div>
            <div className="py-3">
              <MdOutlineMail size={50} />
              <p className="font-bold py-4">Email</p>
              <div className="py-3">abc@gmail.com</div>
              <div className="py-3">xyz@gmail.com</div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <h3 className="text-4xl font-bold text-center">
          {" "}
          <span className="text-green-700 ">G</span>ET{" "}
          <span className="text-green-700 ">I</span>N{" "}
          <span className="text-green-700 ">T</span>OUCH
        </h3>
        <div className="flex justify-evenly items-center py-10 lg:px-20 my-5">
          <div data-aos="flip-left">
            {" "}
            <FaFacebookSquare size={50} className="cursor-pointer" href="" />
          </div>
          <div data-aos="flip-left">
            {" "}
            <FaInstagramSquare size={50} className="cursor-pointer" />
          </div>

          <div data-aos="flip-left">
            <FaLinkedin size={50} className="cursor-pointer" />
          </div>
        </div>
      </div></>
    </>
  );
};

export default Contact;
