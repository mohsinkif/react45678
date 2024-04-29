import React, {useState} from "react";
import AdminNavbar from "../Components/AdminNavbar";
import classes from "../CSS/adminPages.module.css";
import { json, useSubmit } from "react-router-dom";
import { useActionData } from "react-router-dom";

export default function AddHarvester() {
    const data = useActionData();
    const submit = useSubmit();
    const [formData, setFormData] = useState({
        harvester_name: '',
        harvester_phone: '',
        harvester_email: '',
        city:'',
       });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitData = (event) =>{
        event.preventDefault(); 
        submit(formData,
          {method:'post',action: "/adminHome/addharvester" ,encType: "application/json",})
    }
    
  return (
    <div className={classes.contentContainer}>
      <div className={classes.contentHolder}>
      <AdminNavbar/>
        <form onSubmit={submitData} className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                  <div>
                    <h1 className="text-2xl font-semibold">
                    Enter Harvester Details

                    </h1>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        <input
                          required
                          autoComplete="off"
                          id="harvester_name"
                          name="harvester_name"
                          type="text"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Harvester Name"
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="harvester_name"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Harvester Name
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          required
                          autoComplete="off"
                          id="harvester_email"
                          name="harvester_email"
                          type="email"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Harvester Email"
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="harvester_email"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Harvester Email
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          required
                          autoComplete="off"
                          id="city"
                          name="city"
                          type="text"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Farmer Land"
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="city"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          City
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          required
                          autoComplete="off"
                          id="harvester_phone"
                          name="harvester_phone"
                          type="number"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="harvesterphonenumber"
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="farmerphonenumber"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Harvester Contact
                        </label>
                      </div>
                      
                      <div className="relative">
                        <button className="bg-green-500 text-white rounded-md px-2 py-1 ">
                          Submit
                        </button>
                      </div>
                      {data ? <p className="text-green-600">{data.message}</p> : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export const addHarvesterAction = async ({request,params}) => {
    const formData = await request.json();
    const sendDataRequest = await fetch('http://127.0.0.1:8001/add_harvester', {
    method: request.method,
    // mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  });

  if(sendDataRequest.ok){
    const requestData = await sendDataRequest.json();
    return json({message:"The Data has been Succesfully Entered",status:sendDataRequest.status});
  }
}
