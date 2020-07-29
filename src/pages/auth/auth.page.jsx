import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

/**
 * Authentication page with signin and user registeration functionality
 * @param {*} props
 * @type presentational component
 */
const AuthPage = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default AuthPage;
