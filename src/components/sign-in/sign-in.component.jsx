import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  /**
   * Handle when the sign in button is clicked
   * @param {*} event
   */
  handleSignIn = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  /**
   * Handle change in the form inputs
   * @param {*} event
   */
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2 className="font-bold text-3xl">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSignIn}>
          <div className="mt-8 mb-8">
            <FormInput
              name="email"
              label="Email"
              value={this.state.email}
              type="email"
              handleChange={this.handleChange}
              required
            />
          </div>

          <div>
            <FormInput
              name="password"
              label="Password"
              value={this.state.password}
              type="password"
              handleChange={this.handleChange}
              required
            />
          </div>

          <div className="mt-10 flex justify-between">
            <CustomButton
              type="submit"
              onSubmit={this.handleSignIn}
              color="gray"
            >
              Sign in
            </CustomButton>

            <CustomButton type="submit" color="blue" onClick={signInWithGoogle}>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
