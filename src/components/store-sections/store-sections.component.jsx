import React from "react";

import StoreSectionItem from "../store-section-item/store-section-item.component";

/**
 * Grid of item categories in the store that is displayed on the homepage
 *
 * @param {*} props
 * @type presentational componenr
 */
const StoreSections = (props) => {
  return (
    <div className="store-sections-list">
      {props.sections.map(({ id, title, imageUrl }) => (
        <StoreSectionItem
          key={id}
          title={title}
          imageUrl={imageUrl}
        ></StoreSectionItem>
      ))}
    </div>
  );
};

export default StoreSections;
