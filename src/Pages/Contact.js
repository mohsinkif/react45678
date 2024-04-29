import React, { useState } from 'react'
import { MdLocationPin } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { PiChatDotsFill } from "react-icons/pi";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import axios from 'axios'
const Contact = () => {
    const [formData, setFormData] = useState({ message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = getTokenFromStorage(); // Implement this function to get the token
      if (!token) {
        console.error("Token not found in storage");
        return;
      }

      const response = await axios.post(
        "http://127.0.0.1:8001/submit_message",
        { message: formData.message, token }
      );

      if (!response.ok) {
        throw new Error(`Failed to submit message: ${response.statusText}`);
      }

      setSubmitted(true);
      setFormData({ message: '' }); // Clear form fields after successful submission
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };
    return (
        <>
        <Navbar/>
            <div className='bg-white mx-auto'>
                <div className="get-in-touch bg-[#004F50] text-white">
                    <div className="title text-center font-bold text-3xl py-8">Let's Connect!</div>
                    <div className="title text-center font-bold text-3xl py-8">Do you have any question about our services or solutions?</div>
                    <div className="options flex-col items-center flex md:flex-row justify-center gap-16 md:items-start pt-4 pb-8 w-[90%] mx-auto">
                        <div className="address flex flex-col gap-1 justify-center items-center text-center">
                            <div className="icon p-2 w-max bg-gray-400 rounded-full">
                                <MdLocationPin size={40} fill='white' />
                            </div>
                            <div className="title uppercase font-bold">address</div>
                            <h3 className='text-md font-semibold'>Welfield Group Contracting</h3>
                            <p>146 young street <br /> Denver CO 80223</p>
                            <h3 className='text-md font-semibold'>Welfield Group Contracting</h3>
                            <p>146 young street <br /> Denver CO 80223</p>
                        </div>
                        <div className="phone flex flex-col gap-1 justify-center items-center text-center">
                            <div className="icon p-2 w-max bg-gray-400 rounded-full">
                                <PiPhoneCallFill size={40} fill='white' />
                            </div>
                            <div className="title uppercase font-bold">phone</div>
                            <h3 className='text-md font-semibold'>Welfield Group Contracting</h3>
                            <p>146 young street <br /> Denver CO 80223</p>
                            <h3 className='text-md font-semibold'>Welfield Group Contracting</h3>
                            <p>146 young street <br /> Denver CO 80223</p>
                            <h3 className='text-md font-semibold'>Employement Opportunities</h3>
                            <p>146 young street <br />careers@welfieldcontracting.com</p>
                        </div>
                        <div className="email flex flex-col gap-1 justify-center items-center text-center">
                            <div className="icon p-2 w-max bg-gray-400 rounded-full">
                                <PiChatDotsFill size={40} fill='white' />
                            </div>
                            <div className="title uppercase font-bold">email</div>
                            <h3 className='text-md font-semibold'>Welfield Group Contracting</h3>
                            <p>146 young street <br /> Denver CO 80223</p>
                            <h3 className='text-md font-semibold'>Employement Opportunities</h3>
                            <p>146 young street <br />careers@welfieldcontracting.com</p>
                        </div>
                    </div>
                </div>

                <div className="message-us flex flex-col md:flex-row justify-center gap-4 w-[90%] mx-auto">
                    <div className="title py-8 w-[100%] md:w-1/2">
                        <h1 className='text-blue-800 font-bold text-4xl pb-2 text-center md:text-start'>Message Us</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab quam, unde placeat, nam laboriosam, ut ipsam iusto molestias numquam provident ipsum veniam. Nemo odio rerum atque at repudiandae dicta corporis minima similique necessitatibus neque, facere, minus reiciendis doloribus doloremque dolore delectus maiores eum accusamus optio quas tempora debitis dolor voluptas? Inventore veritatis qui rerum omnis dolorem a aspernatur, at quia non aliquid dignissimos nostrum quasi cupiditate eaque animi ullam repellat? Laudantium quos natus ducimus nobis, deleniti, reiciendis nostrum odit, aliquid vel consequatur explicabo inventore. Deleniti harum fugiat officia ullam, consequatur, amet rem nobis vel officiis, dignissimos magni itaque eum.</p>
                    </div>
                    <div className="flex justify-center items-center w-[100%] md:w-1/2 bg-white">
      <form onSubmit={handleSubmit} className="container mx-auto my-4 px-4 lg:px-20">
        <div className="my-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            placeholder="Message*"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            name='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="my-2 w-1/2 lg:w-1/4">
          <button
            type='submit'
            className="uppercase text-sm font-bold tracking-wide bg-[#D7DF1F] text-gray-100 p-3 rounded-lg w-full focus:shadow-outline hover:bg-[#C5D410] hover:text-gray-100"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

                </div>
                
            </div>
      <Footer/>
        </>
        
    )
}

export default Contact;

function getTokenFromStorage() {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "token") {
      return value;
    }
  }
  return null;
}