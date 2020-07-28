import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";

/**
 * Authentication page with signin and user registeration functionality
 * @param {*} props
 * @type presentational component
 */
const AuthPage = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <SignIn></SignIn>
    </div>
  );
};

export default AuthPage;
