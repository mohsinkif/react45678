import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "name",
    headerName: "NAME",
    width: 200,
    editable: false,
  },
  {
    field: "email",
    headername: "EMAIL",
    width: 300,
    // editable: true,
  },
  {
    field: "number",
    headername: "NUMBER",
    // type: "number",
    width: 200,
    // editable: true,
  },
];

const rows = [
  {
    id: 1,
    email: "careers@welfieldcontracting.com",
    name: "Jon",
    number: 198798098,
  },
  {
    id: 2,
    email: "careers@welfieldcontracting.com",
    name: "Cersei",
    number: 31,
  },
  {
    id: 3,
    email: "careers@welfieldcontracting.com",
    name: "Jaime",
    number: 31,
  },
  { id: 4, email: "careers@welfieldcontracting.com", name: "Arya", number: 11 },
  {
    id: 5,
    email: "careers@welfieldcontracting.com",
    name: "Daenerys",
    number: null,
  },
  { id: 6, email: "careers@welfieldcontracting.com", name: null, number: 150 },
  {
    id: 7,
    email: "careers@welfieldcontracting.com",
    name: "Ferrara",
    number: 44,
  },
  {
    id: 8,
    email: "careers@welfieldcontracting.com",
    name: "Rossini",
    number: 36,
  },
  {
    id: 9,
    email: "careers@welfieldcontracting.com",
    name: "Harvey",
    number: 65,
  },
];

export default function Table() {
  return (
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
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
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
  );
}