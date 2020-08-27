import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./assets/styles/main.scss";

import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import AuthPage from "./pages/auth/auth.page";
import CheckoutPage from "./pages/checkout/checkout.page";

import Navbar from "./components/navbar/navbar.component";
import UsersService from "./services/users.service";
import { auth } from "./firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.actions";
import { selectCurrentUser } from "./store/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await UsersService.createAuthenticatedUserProfile(
          authUser
        );

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <div
          style={{
            maxWidth: "1400px",
          }}
          className="mx-auto px-10"
        >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/auth"
              render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
