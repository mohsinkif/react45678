import React from "react";
import classes from "../CSS/adminPages.module.css";

export default function DataTable({ data }) {


  const deleteDataHandle =  (event) => {
    fetch('http://127.0.0.1:8001/deleteharvester',{
      method: 'delete',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({harvester_email:event.target.value})
    });

    window.location.reload();

  }
  return (
    <div className={classes.tableContainer}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Harvester Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Harvester Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Harvester Contact
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        
        </tbody>
      </table>
    </div>
  );
}
