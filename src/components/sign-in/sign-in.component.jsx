import React from "react";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStartAction,
  emailSignInStartAction,
} from "../../store/user/user.actions";
import { connect } from "react-redux";
import withLoadingSpinner from "../with-loading-spinner/with-loading-spinner.component";
import { selectIsAuthenticating } from "../../store/user/user.selectors";

class SignIn extends React.Component {
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
  handleSignIn = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart({ email, password });
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
    const { googleSignInStart } = this.props;

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

            <CustomButton
              type="button"
              color="blue"
              onClick={googleSignInStart}
            >
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsAuthenticating,
});

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStartAction()),
  emailSignInStart: (credentials) =>
    dispatch(emailSignInStartAction(credentials)),
});

// export default connect(null, mapDispatchToProps)(SignIn);

const SignInComponent = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingSpinner
)(SignIn);

export default SignInComponent;
