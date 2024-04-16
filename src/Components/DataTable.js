import React from "react";
import classes from "../CSS/adminPages.module.css";

export default function DataTable() {
  return (
    <div className={classes.tableContainer}>
      <table class="min-w-full divide-y divide-gray-200">
  <thead class="bg-gray-50">
    <tr>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harvester Name</th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harvester Email</th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harvester City</th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harvester Contact</th>

    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200">
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
      <td class="px-6 py-4 whitespace-nowrap">john@example.com</td>
      <td class="px-6 py-4 whitespace-nowrap">Admin</td>
    </tr>
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">Jane Smith</td>
      <td class="px-6 py-4 whitespace-nowrap">jane@example.com</td>
      <td class="px-6 py-4 whitespace-nowrap">User</td>
    </tr>
  </tbody>
</table>

    </div>
  );
}
