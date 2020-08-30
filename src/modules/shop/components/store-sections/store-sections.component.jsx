import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./store-sections.scss";
import { selectShopSections } from "../../../../store/shop/shop.selectors";

import StoreSectionItem from "../store-section-item/store-section-item.component";

/**
 * Grid of item categories in the store that is displayed on the homepage
 *
 * @param {*} props
 * @type presentational componenr
 */
const StoreSections = ({ sections }) => {
  return (
    <div className="store-sections-list">
      {sections.map(({ id, ...otherSectionProps }) => (
        <StoreSectionItem key={id} {...otherSectionProps}></StoreSectionItem>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectShopSections,
});

export default connect(mapStateToProps)(StoreSections);
