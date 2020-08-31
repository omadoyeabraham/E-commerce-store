import React from "react";
import { connect } from "react-redux";

import FormInput from "../../../common/components/form-input/form-input.component";
import CustomButton from "../../../common/components/custom-button/custom-button.component";
import { signUpStartAction } from "../../../../store/user/user.actions";

/**
 * Signup component used to regsiter a new user
 */
class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  /**
   * Handle when the sign in button is clicked
   * @param {*} event
   */
  handleSignUp = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUp } = this.props;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    signUp({ displayName, email, password });
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
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div>
        <h2 className="font-bold text-3xl">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSignUp}>
          <div className="mt-8 mb-8">
            <FormInput
              name="displayName"
              label="Display Name"
              value={displayName}
              type="text"
              handleChange={this.handleChange}
              required
            />
          </div>

          <div className="mb-8">
            <FormInput
              name="email"
              label="Email"
              value={email}
              type="email"
              handleChange={this.handleChange}
              required
            />
          </div>

          <div className="mb-8">
            <FormInput
              name="password"
              label="Password"
              value={password}
              type="password"
              handleChange={this.handleChange}
              required
            />
          </div>

          <div>
            <FormInput
              name="confirmPassword"
              label="Confirm Password"
              value={confirmPassword}
              type="password"
              handleChange={this.handleChange}
              required
            />
          </div>

          <div className="mt-10 flex justify-between">
            <CustomButton
              type="submit"
              onSubmit={this.handleSignUp}
              color="gray"
            >
              Sign Up
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (signUpData) => dispatch(signUpStartAction(signUpData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
