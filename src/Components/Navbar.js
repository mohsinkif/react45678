import React, { useState } from "react";
import NavLink from "./CustomLink";
 import MenuOverlay from "./MenuOverLay";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { TiLeaf } from "react-icons/ti";


const navLinks = [
  {
    title: "Home",
    path: "/home",
  },

  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Harvester",
    path: "/harvester",
  },

  {
    title: "Transporter",
    path: "/transporter",
  },
  
   
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
       <nav className="mx-auto border border-green-700 top-0 left-0 right-0 z-10 bg-transparent  bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl text-secondary-400 md:text-5xl font-semibold"
        >
<div className="flex items-center">
  <p className="text-2xl text-green-700">Agri<span className="text-black">Drone</span></p>
  <TiLeaf color="green" size={40} />
</div>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-green-500 hover:border-white"
            >
             </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-secondary-500 hover:border-white"
            >
             </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
                      <Link to="/">Logout</Link>

          </ul>

        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
 </> );
};

export default Navbar;