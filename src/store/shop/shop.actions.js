export const SHOP_ACTIONS = {
  STORE_SHOP_COLLECTIONS_MAP: "STORE_SHOP_COLLECTIONS_MAP",
  FETCH_SHOP_COLLECTIONS_START: "FETCH_SHOP_COLLECTIONS_START",
  FETCH_SHOP_COLLECTIONS_SUCCESS: "FETCH_SHOP_COLLECTIONS_SUCCESS",
  FETCH_SHOP_COLLECTIONS_FAILURE: "FETCH_SHOP_COLLECTIONS_FAILURE",
};

/**
 * Action creator for the action which stores the map of shop collections
 * @param {*} collectionsArray
 */
export const storeShopCollectionsMapAction = (collectionsArray) => ({
  type: SHOP_ACTIONS.STORE_SHOP_COLLECTIONS_MAP,
  payload: collectionsArray,
});

/**
 * Action creator for the fetch shop collection start action
 */
export const fetchShopCollectionsStartAction = () => ({
  type: SHOP_ACTIONS.FETCH_SHOP_COLLECTIONS_START,
});

/**
 * Action creator for the fetch shop collection success action
 */
export const fetchShopCollectionsSuccessAction = (collections) => ({
  type: SHOP_ACTIONS.FETCH_SHOP_COLLECTIONS_SUCCESS,
  payload: collections,
});

/**
 * Action creator for the fetch shop collections failure action
 * @param {*} errorMessage
 */
export const fetchShopCollectionsFailureAction = (errorMessage) => ({
  type: SHOP_ACTIONS.FETCH_SHOP_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
