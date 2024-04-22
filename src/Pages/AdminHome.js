import { Link, useNavigate } from "react-router-dom";
import classes from "../CSS/adminhome.module.css";
import React from "react";
import AdminNavbar from "../Components/AdminNavbar";

export default function AdminHome() {
  return (
    <div className={classes.adminHomeContainer}>
      <AdminNavbar />

      <div className={classes.adminButtonContainer}>
        <div className={classes.adminButtonsHolder}>
          <Link to="/registerfarmer">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              Register Farmer
            </button>
          </Link>

          <Link to="/addharvester">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              Add Harvester
            </button>
          </Link>

          <Link to="/addtransporter">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              Add Transporter
            </button>
          </Link>

          <Link to="/viewharvesterdata">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              View Harvester Data
            </button>
          </Link>

          <Link to="/viewfarmer">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              View Farmer Data
            </button>
          </Link>

          <Link to="/viewtransporter">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              View Transporter Data
            </button>
          </Link>

          
        </div>
      </div>
    </div>
  );
}
