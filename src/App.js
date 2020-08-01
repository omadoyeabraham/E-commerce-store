import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./assets/styles/main.scss";

import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import AuthPage from "./pages/auth/auth.page";
import Navbar from "./components/navbar/navbar.component";
import UsersService from "./services/users.service";
import { auth } from "./firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.actions";

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
            <Route exact path="/shop" component={ShopPage} />
            <Route
              exact
              path="/auth"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
