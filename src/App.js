import React from "react";
import { Route, Link } from "react-router-dom";
import "./assets/styles/main.scss";

import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <nav className="bg-gray-700 text-gray-200 text-3xl font-extrabold">
        <Link to="/" className="mx-4">
          HOME
        </Link>
        <Link to="/shop">SHOP</Link>
      </nav>
      <div
        style={{
          maxWidth: "1400px",
        }}
        className="mx-auto"
      >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </div>
    </div>
  );
}

export default App;
