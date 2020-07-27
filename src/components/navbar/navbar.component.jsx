import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

/**
 * Navigation bar used across all pages
 *
 * @param {*} props
 * @type presentational component
 */
const Navbar = (props) => {
  return (
    <nav className=" flex justify-between items-end h-16 px-10 mb-10">
      <Link to="/">
        <Logo></Logo>
      </Link>
      <div className="text-gray-900 text-2xl font-extrabold">
        <Link to="/shop" className="px-2">
          SHOP
        </Link>
        <Link to="/contact" className="px-2">
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
