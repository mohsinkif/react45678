import React, { useEffect, useState } from "react";
import { TiLeaf } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import classes from "../CSS/adminhome.module.css";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const [loggedIn, setLoogedIn] = useState(true);

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  const logOutHandler = () => {
    setLoogedIn(false);
    document.cookie =
      "token" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  return (
    <div>
      <div className={classes.adminHomeNavContainer}>
        <div className={classes.adminNavHolder}>
          <nav className="mx-auto border border-green-700 top-0 left-0 right-0 z-10 bg-transparent  bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
              <Link className="text-2xl text-secondary-400 md:text-5xl font-semibold">
                <div className="flex items-center">
                  <p className="text-2xl text-green-700">
                    Agri<span className="text-black">Drone</span>
                  </p>
                  <TiLeaf color="green" size={40} />
                </div>
              </Link>

              <Link to="/userLogin">
                <button
                  onClick={logOutHandler}
                  className="rounded px-5 font-bold text-2xl py-2 hover:bg-green-600 hover:text-white bg-transparent text-green-600"
                >
                  Log Out
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
