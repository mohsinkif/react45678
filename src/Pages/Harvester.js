import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import IndividualIntervalsExample from '../Components/Carousel'
import PieChart from "../Components/PirChart";
import { backendurl } from "../constant";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "harvester_name", headerName: "Name", width: 200 },
  { field: "harvester_phone", headerName: "Phone", width: 200 },
  { field: "harvester_email", headerName: "Email", width: 300 },
];

export default function Table() {
  const [harvesters, setHarvesters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = getTokenFromStorage();
        if (!token) {
          console.error("Token not found in storage");
          return;
        }

        const response = await fetch(`${backendurl}get_harvesters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        setHarvesters(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

   const getRowId = (row) => row.id || Math.random(); // Use a unique id or generate one if not available

  return (
    <>
      <Navbar />
      <div className="title text-4xl font-bold text-center py-8">NEARBY HARVESTER</div>
      <Box
        sx={{
          height: "auto",
          width: "80%",
          margin: "auto",
          "& .MuiDataGrid-main": {
            borderRadius: "8px !important",
          },
          "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
            background: "#384152 !important",
          },
        }}
      >
        <DataGrid
          rows={harvesters}
          columns={columns}
          getRowId={getRowId} // Specify the custom id function
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            color: "white",
            backgroundColor: "#202938",
            "& .MuiSvgIcon-root": {
              color: "#A3A9B2 !important",
            },
            "& .MuiTablePagination-displayedRows": {
              color: "#A3A9B2 !important",
            },
          }}
        />
      </Box>
      <PieChart/>
    </>
  );
}

function getTokenFromStorage() {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "token") {
      return value;
    }
  }
  return null;
}
