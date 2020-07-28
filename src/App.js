import React from "react";
import { Route, Switch } from "react-router-dom";
import "./assets/styles/main.scss";

import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import AuthPage from "./pages/auth/auth.page";
import Navbar from "./components/navbar/navbar.component";
import { auth } from "./firebase/firebase.utils";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="bg-gray-200 min-h-screen">
        <Navbar currentUser={this.state.currentUser} />
        <div
          style={{
            maxWidth: "1400px",
          }}
          className="mx-auto px-10"
        >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/auth" component={AuthPage} />
          </Switch>
        </div>
      </div>
    );
  }
}
