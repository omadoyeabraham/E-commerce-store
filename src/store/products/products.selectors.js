import { createSelector } from "reselect";

export const selectProductsState = (state) => state.products;

export const selectProductSections = createSelector(
  [selectProductsState],
  (productsState) => productsState.sections
);

export const selectProductCollections = createSelector(
  [selectProductsState],
  (productsState) => productsState.collections
);

export const selectProductCollectionsAsArray = createSelector(
  [selectProductCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectProductCollectionById = (collectionId) =>
  createSelector([selectProductCollections], (collections) =>
    collections ? collections[collectionId] : null
  );
