import React from "react";

import StoreSections from "../../../shop/components/store-sections/store-sections.component";

/**
 * Homepage
 *
 * @param {*} props
 * @type presentational component
 */
const HomePage = (props) => {
  return (
    <div className="py-10">
      <StoreSections></StoreSections>
    </div>
  );
};

export default HomePage;
