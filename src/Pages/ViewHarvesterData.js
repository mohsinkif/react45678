import React, {useState} from 'react'
import classes from "../CSS/adminPages.module.css";
import { useActionData, useSubmit,useLocation, json } from 'react-router-dom';
import DataTable from '../Components/DataTable';

export default function ViewHarvesterData() {
    const location = useLocation();
    const path = location.pathname;
    const segments = path.split('/');
    const pathName = segments[1]; 

    const data = useActionData();
    const submit = useSubmit();

    if(data && console.log(data));

    const [formData,setFormData]=useState({
        city: '',})
    
    const handleChange = (e) =>{
    setFormData({
        ...formData,[e.target.name]:e.target.value,
    });}

    const searchHarvesterHanle = (event) => {
        event.preventDefault();
        submit({city:formData.city}, {method:'post',action: `/${pathName}` ,encType:'application/json'})
    }

  return (
    <div className={classes.vhdContainer}>
        <div className={classes.vhdontentHolder}>
            <div className={classes.vhdFormHolder}>
                <form onSubmit={searchHarvesterHanle}>
                    <div className="divide-y divide-gray-200">
                      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative">
                          <input required autoComplete="off" id="city" name="city" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="City Name" onChange={handleChange} />
                          <label htmlFor="city" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">City Name</label>
                        </div>
                        <div className="relative">
                          <button type='submit' className="bg-green-500 text-white rounded-md px-2 py-1" >Search</button>
                        </div>
                      </div>
                    </div>
                </form>
            </div>
            <div className={classes.vhdTableHolder}>
                {data ? data.map((eachEntry) => {return <DataTable name={eachEntry.harvester_name} phone={phone} email={harvester_email}/>}): null}
            </div>

        </div>
    </div>
  )
}


export const viewDataRequest = async ({request,params}) => {

    const formData = await request.json();
    console.log(formData);
    const sendViewRequest = await fetch('http://127.0.0.1:8001/viewharvester', {
    method: request.method,
    // mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  });

  if(!sendViewRequest.ok){
    return json({message:"There Is No Hrvester In This City", status:sendViewRequest.status})    
  }
  else {
    const viewRequestData = await sendViewRequest.json();
    return viewRequestData;
  }
}