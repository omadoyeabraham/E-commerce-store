import React from "react";
import { Route, Switch } from "react-router-dom";
import "./assets/styles/main.scss";

import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <Switch
        style={{
          maxWidth: "1400px",
        }}
        className="mx-auto px-10"
      >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
