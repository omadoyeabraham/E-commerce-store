import React from "react";
import { Route, Link } from "react-router-dom";
import "./assets/styles/main.scss";

import HomePage from "./pages/homepage.page";

const HatsPage = (props) => {
  return <div className="text-6xl font-bold">HATSPAGE</div>;
};

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <nav className="bg-gray-700 text-gray-200 text-3xl font-extrabold">
        <Link to="/" className="mx-4">
          HOME
        </Link>
        <Link to="/hats">HATS</Link>
      </nav>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
