import React, {useState} from 'react'
import classes from "../CSS/adminPages.module.css";
import { useActionData, useSubmit,useLocation, json } from 'react-router-dom';
import DataTable from '../Components/DataTable';

export default function ViewTransporterData() {
    const location = useLocation();
    const path = location.pathname;
    const segments = path.split('/');
    const pathName = segments[2]; 

    const data = useActionData();
    const submit = useSubmit();


    const [formData,setFormData]=useState({
        tcity: '',})
    
    const handleChange = (e) =>{
    setFormData({
        ...formData,[e.target.name]:e.target.value,
    });console.log(e.target.value)}

    const searchHarvesterHanle = (event) => {
        event.preventDefault();
        console.log(formData.tcity)
        submit({tcity:formData.tcity}, {method:'post',action: `/adminHome/${pathName}` ,encType:'application/json'})
    }

  return (
    <div className={classes.vhdContainer}>
        <div className={classes.vhdontentHolder}>
            <div className={classes.vhdFormHolder}>
                <form onSubmit={searchHarvesterHanle}>
                    <div className="divide-y divide-gray-200">
                      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative">
                          <input required autoComplete="off" id="tcity" name="tcity" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="City Name" onChange={handleChange} />
                          <label htmlFor="tcity" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">City Name</label>
                        </div>
                        <div className="relative">
                          <button type='submit' className="bg-green-500 text-white rounded-md px-2 py-1" >Search</button>
                        </div>
                      </div>
                    </div>
                </form>
            </div>
            <div className={classes.vhdTableHolder}>
{/**                <DataTable data={[]}/>
 */}
                {data ? <DataTable data={data} pathName={`${pathName}` }/>: <p className="text-green-600">There are no Values To Show</p>}
            </div>

        </div>
    </div>
  )
}


export const viewTransporterDataAction = async ({request,params}) => {

    const formData = await request.json();
    const sendViewRequest = await fetch('http://127.0.0.1:8001/viewtransporter', {
    method: request.method,
    // mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  });

  if(!sendViewRequest.ok){
    return json({message:"There Is No Transporter In This City", status:sendViewRequest.status})    
  }
  else {
    const viewRequestData = await sendViewRequest.json();
    console.log(viewRequestData);
    return viewRequestData;
  }
}