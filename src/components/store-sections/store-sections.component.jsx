import React from "react";
import { connect } from 'react-redux'

import StoreSectionItem from "../store-section-item/store-section-item.component";
import "./store-sections.scss";
import { createStructuredSelector } from "reselect";
import { selectProductSections } from "../../store/products/products.selectors";

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
  sections: selectProductSections
})

export default connect(mapStateToProps)(StoreSections);
