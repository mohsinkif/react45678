// CustomLink.jsx
import React from "react";
import { Link } from 'react-router-dom';

const CustomLink = ({ href, title }) => {
  return (
    <Link
      to={href}
      className="block py-2 pl-3 pr-4 text-green-900 sm:text-xl rounded md:p-0 hover:text-secondary-500 hover:border-b border-green-800"
    >
      {title}
    </Link>
  );
};

export default CustomLink;