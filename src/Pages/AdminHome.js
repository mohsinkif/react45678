import { Link } from "react-router-dom";
import classes from "../CSS/adminhome.module.css";
import React, { useEffect, useState } from "react";
  
import { TiLeaf } from "react-icons/ti";
export default function AdminHome() {

  return (
    <div className={classes.adminHomeContainer}>
      <div className={classes.adminHomeNavContainer}>
        <div className={classes.adminNavHolder}>
        <nav className="mx-auto border border-green-700 top-0 left-0 right-0 z-10 bg-transparent  bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link
             className="text-2xl text-secondary-400 md:text-5xl font-semibold">
            <div className="flex items-center">
              <p className="text-2xl text-green-700">
                Agri<span className="text-black">Drone</span>
              </p>
              <TiLeaf color="green" size={40} />
            </div>
          </Link>
          
          <Link to="/userLogin">
            <button className="rounded px-5 font-bold text-2xl py-2 hover:bg-green-600 hover:text-white bg-transparent text-green-600">
              Log Out
            </button>
          </Link>
        </div>
      </nav>
        </div>
      </div>

      <div className={classes.adminButtonContainer}>
        <div className={classes.adminButtonsHolder}>
          <Link to="/userLogin">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              Register Farmer
            </button>
          </Link>

          <Link to="/userLogin">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              Add Harvester
            </button>
          </Link>

          <Link to="/userLogin">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              Add Transporter
            </button>
          </Link>

          <Link to="/userLogin">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              View Harvester
            </button>
          </Link>

          <Link to="/userLogin">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              View Transporter 
            </button>
          </Link>

          <Link to="/userLogin">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              Delete Harvester
            </button>
          </Link>

          <Link to="/userLogin">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              Delete Transporter
            </button>
          </Link>

          <Link to="/userLogin">
            <button className="rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white">
              Update Farmer  
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
