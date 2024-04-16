import React from "react";
import classes from "../CSS/adminPages.module.css";

export default function DataTable({ data }) {
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
          {data.map((eachEntry) => {
            return (
              <tr key={eachEntry.harvester_phone}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {eachEntry.harvester_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {eachEntry.harvester_email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {eachEntry.harvester_phone}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
