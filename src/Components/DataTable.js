import React from "react";
import classes from "../CSS/adminPages.module.css";

export default function DataTable({email,phone,name}) {
  return (
    <div className={classes.tableContainer}>
      <table class="min-w-full divide-y divide-gray-200">
  <thead class="bg-gray-50">
    <tr>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harvester Name</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harvester Email</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harvester Contact</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{email}</td>
      <td className="px-6 py-4 whitespace-nowrap">{phone}</td>
    </tr>
    
  </tbody>
</table>

    </div>
  );
}
