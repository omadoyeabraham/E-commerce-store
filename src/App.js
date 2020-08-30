import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./assets/styles/main.scss";

import HomePage from "./modules/common/pages/homepage/homepage.page";
import ShopPage from "./modules/shop/pages/shop/shop.page";
import AuthPage from "./modules/auth/pages/auth/auth.page";
import CheckoutPage from "./modules/cart/pages/checkout/checkout.page";

import Navbar from "./modules/common/components/navbar/navbar.component";
import { selectCurrentUser } from "./store/user/user.selectors";
import { checkUserSessionAction } from "./store/user/user.actions";

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
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
  checkUserSession: () => dispatch(checkUserSessionAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
