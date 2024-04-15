import React, {useState} from 'react'
import { Form, useSubmit, useLocation } from 'react-router-dom';


export default function AuthenticationForm() {
    const location = useLocation();
    const path = location.pathname;
    const segments = path.split('/');
    const pathName = segments[1]; // The word 'user' is at the first index

    const [formData,setFormData]=useState({
        email: '',
        password:'',
      })

    const handleChange = (e) =>{
    setFormData({
        ...formData,[e.target.name]:e.target.value,
    });}

    const submit = useSubmit();

    const loginHandler = (event) => {
        event.preventDefault(); 
        submit({email:formData.email, password:formData.password},
          {method:'post',action: `/${pathName}` ,encType: "application/json",})
    }

    return (
        <>
          <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                  <div>
                    <h1 className="text-2xl font-semibold">Login To Your Account</h1>
                  </div>
                  <form onSubmit={loginHandler}>
                    <div className="divide-y divide-gray-200">
                      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative">
                          <input required autoComplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" onChange={handleChange} />
                          <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                        </div>
                        <div className="relative">
                          <input required autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" onChange={handleChange} />
                          <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                        </div>
                        <div className="relative">
                          <button type='submit' className="bg-green-500 text-white rounded-md px-2 py-1" >Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
