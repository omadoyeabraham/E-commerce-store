import React from "react";

import StoreSections from "../../components/store-sections/store-sections.component";
import "./homepage.page.scss";

/**
 * Homepage
 *
 * @param {*} props
 * @type presentational component
 */
const HomePage = (props) => {
  return (
    <div className="homepage px-10 pt-10">
      <StoreSections></StoreSections>
    </div>
  );
};

export default HomePage;
