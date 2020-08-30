import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../../../assets/images/logo.svg";
import CartNavLink from "../cart-nav-link/cart-nav-link.component";
import { selectCurrentUser } from "../../../../store/user/user.selectors";
import { signOutStartAction } from "../../../../store/user/user.actions";

/**
 * Navigation bar used across all pages
 *
 * @param {*} props
 * @type presentational component
 */
const Navbar = ({ currentUser, signOut }) => {
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
          <div className="px-2 inline-block cursor-pointer" onClick={signOut}>
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
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
