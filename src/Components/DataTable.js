import React from "react";
import classes from "../CSS/adminPages.module.css";
import { backendurl } from "../constant";
export default function DataTable({ data, pathName }) {
  const endpoint =
    (pathName === "viewtransporter" && "deletetransporter") ||
    (pathName === "viewharvesterdata" && "deleteharvester") ||
    (pathName === "viewfarmer" && "deletefarmer");

    
  const deleteDataHandle = (event) => {
    event.preventDefault();
    const body =
      (pathName === "viewtransporter" && {
        transporter_email: event.target.value,
      }) ||
      (pathName === "viewharvesterdata" && {
        harvester_email: event.target.value,
      }) ||
      (pathName === "viewfarmer" && { farmeremail: event.target.value });
    fetch(`${backendurl}/${endpoint}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    window.location.reload();
  };

  console.log(data);
  return (
    <div className={classes.tableContainer}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {(pathName === "viewtransporter" && "Transporter Name") ||
                (pathName === "viewharvesterdata" && "Harvester Name") ||
                (pathName === "viewfarmer" && "Farmer Name")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {(pathName === "viewtransporter" && "Transporter Email") ||
                (pathName === "viewharvesterdata" && "Harvester Email") ||
                (pathName === "viewfarmer" && "Farmer Email")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {(pathName === "viewtransporter" && "Transporter Phone") ||
                (pathName === "viewharvesterdata" && "Harvester Phone") ||
                (pathName === "viewfarmer" && "Farmer Phone")}
            </th>
            {pathName === "viewfarmer" && (
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Farmer Username
              </th>
            )}
            {pathName === "viewfarmer" && (
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Farmer Land
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data &&
            data.length > 0 &&
            data.map((eachEntry) => {
              return (
                <tr key={eachEntry.harvester_phone}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {(pathName === "viewtransporter" &&
                      eachEntry.transporter_name) ||
                      (pathName === "viewharvesterdata" &&
                        eachEntry.harvester_name) ||
                      (pathName === "viewfarmer" && eachEntry.farmername)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {(pathName === "viewtransporter" &&
                      eachEntry.transporter_email) ||
                      (pathName === "viewharvesterdata" &&
                        eachEntry.harvester_email) ||
                      (pathName === "viewfarmer" && eachEntry.farmeremail)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {(pathName === "viewtransporter" &&
                      eachEntry.transporter_phone) ||
                      (pathName === "viewharvesterdata" &&
                        eachEntry.harvester_phone) ||
                      (pathName === "viewfarmer" &&
                        eachEntry.farmerphonenumber)}
                  </td>
                  {pathName === "viewfarmer" && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      {eachEntry.farmerusername}
                    </td>
                  )}

                  {pathName === "viewfarmer" && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      {eachEntry.farmer_land}
                    </td>
                  )}

                  <td>
                    <button
                      onClick={deleteDataHandle}
                      value={
                        (pathName === "viewtransporter" &&
                          eachEntry.transporter_email) ||
                        (pathName === "viewharvesterdata" &&
                          eachEntry.harvester_email) ||
                        (pathName === "viewfarmer" && eachEntry.farmeremail)
                      }
                      class="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2h8a2 2 0 012 2h2a1 1 0 011 1v1a2 2 0 01-2 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2zm2-2a1 1 0 00-1 1v1h10V4a1 1 0 00-1-1H6zM8 9a1 1 0 011-1h2a1 1 0 010 2H9a1 1 0 01-1-1zm4 6a1 1 0 100 2 1 1 0 000-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
