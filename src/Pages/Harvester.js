import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
const Harvester = () => {
  return (
    <><Navbar/>
      <><div data-aos="zoom-out-left">
        <div
          className="relative overflow-x-auto shadow-md sm:rounded-lg my-28"
          id="harvester"
        >
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-2xl  bg-gray-50 dark:bg-gray-800"
                >
                  Profile
                </th>
                <th scope="col" className="px-6 py-3 text-2xl">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white "
                >
                  <img
                    src="p1.jfif"
                    alt=""
                    className="rounded"
                    style={{ width: "4rem" }}
                  />
                </th>
                <td className="px-6 py-4">
                  xyz@gmail.com <br />
                  4343434
                </td>
                {/* <td className="py-4">
                    8584545884
                </td> */}
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  <img
                    src="p2.jfif"
                    alt=""
                    className="rounded"
                    style={{ width: "4rem" }}
                  />
                </th>
                <td className="px-6 py-4">
                  xyz@gmail.com <br />
                  4343434
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  <img
                    src="p3.jfif"
                    alt=""
                    className="rounded"
                    style={{ width: "4rem" }}
                  />
                </th>
                <td className="px-6 py-4">
                  xyz@gmail.com <br />
                  4343434
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </>
    </>
  );
};

export default Harvester;
