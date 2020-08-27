export const ProductsActions = {
  STORE_PRODUCT_COLLECTIONS_MAP: "STORE_PRODUCT_COLLECTIONS_MAP",
};

/**
 * Action creator for the action which stores the map of product collections
 *
 * @param {*} collectionsArray
 */
export const storeProductCollectionsMap = (collectionsArray) => ({
  type: ProductsActions.STORE_PRODUCT_COLLECTIONS_MAP,
  payload: collectionsArray,
});
