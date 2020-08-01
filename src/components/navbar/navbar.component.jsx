import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import CartNavLink from "../cart-nav-link/cart-nav-link.component";

/**
 * Navigation bar used across all pages
 *
 * @param {*} props
 * @type presentational component
 */
const Navbar = ({ currentUser }) => {
  return (
    <nav className=" flex justify-between items-end h-16 px-10 mb-10">
      <Link to="/">
        <Logo></Logo>
      </Link>
      <div className="text-gray-900 text-2xl font-extrabold flex justify-center items-center">
        <Link to="/shop" className="px-4">
          SHOP
        </Link>
        <Link to="/contact" className="px-4">
          CONTACT
        </Link>

        {currentUser ? (
          <div
            className="px-2 inline-block cursor-pointer"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to="/auth" className="px-2">
            SIGN IN
          </Link>
        )}

        <CartNavLink></CartNavLink>
      </div>
    </nav>
  );
};

/**
 * Map redux store state data to props on this component
 * @param {*} state
 */
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navbar);
