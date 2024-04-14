// MenuOverlay.jsx
import React from "react";
import CustomLink from "./CustomLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <CustomLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;