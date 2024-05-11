// MenuOverlay.jsx
import React from "react";
import CustomLink from "./CustomLink";

const MenuOverlay = ({ links, logOutHandler }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <CustomLink href={link.path} title={link.title} />
        </li>
      ))}
      <li key={"logout"}>
              <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-green-500 hover:border-white" onClick={logOutHandler}>Logout</button>

      </li>
    </ul>
  );
};

export default MenuOverlay;