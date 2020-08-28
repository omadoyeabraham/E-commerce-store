import { createSelector } from "reselect";

export const selectShopState = (state) => state.shop;

export const selectShopSections = createSelector(
  [selectShopState],
  (shopState) => shopState.sections
);

export const selectShopCollections = createSelector(
  [selectShopState],
  (shopState) => shopState.collections
);

export const selectShopCollectionsAsArray = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectShopCollectionById = (collectionId) =>
  createSelector([selectShopCollections], (collections) => {
    return collections ? collections[collectionId] : null;
  });

export const selectIsFetchingCollections = createSelector(
  [selectShopState],
  (shopState) => shopState.isFetching
);
