import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./assets/styles/main.scss";

import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import AuthPage from "./pages/auth/auth.page";
import CheckoutPage from "./pages/checkout/checkout.page";

import Navbar from "./components/navbar/navbar.component";
import UsersService from "./services/users.service";
import { auth, firestore } from "./firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.actions";
import { selectCurrentUser } from "./store/user/user.selectors";
import { storeProductCollectionsMap } from "./store/products/products.actions";
import { convertCollectionSnapShotToMap } from "./firebase/data.utils";
import withLoadingSpinnerComponent from "./components/with-loading-spinner/with-loading-spinner.component";

const ShopPageWithSpinner = withLoadingSpinnerComponent(ShopPage);

class App extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, setProductsCollection } = this.props;

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

    const collectionRef = firestore.collection("collections");
    collectionRef.get().then((snapshot) => {
      const collectionsArray = convertCollectionSnapShotToMap(snapshot);
      setProductsCollection(collectionsArray);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { loading } = this.state;
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
            <Route
              path="/shop"
              render={(props) => (
                <ShopPageWithSpinner isLoading={loading} {...props} />
              )}
            />
            <Route exact path="/checkout" component={CheckoutPage} />
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

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setProductsCollection: (collectionsArray) =>
    dispatch(storeProductCollectionsMap(collectionsArray)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
