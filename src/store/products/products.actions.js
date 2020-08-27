import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionSnapShotToMap } from "../../firebase/data.utils";

export const ProductsActions = {
  STORE_PRODUCT_COLLECTIONS_MAP: "STORE_PRODUCT_COLLECTIONS_MAP",
  FETCH_PRODUCT_COLLECTIONS_START: "FETCH_PRODUCT_COLLECTIONS_START",
  FETCH_PRODUCT_COLLECTIONS_SUCCESS: "FETCH_PRODUCT_COLLECTIONS_SUCCESS",
  FETCH_PRODUCT_COLLECTIONS_FAILURE: "FETCH_PRODUCT_COLLECTIONS_FAILURE",
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

export const fetchCollectionsStart = () => ({
  type: ProductsActions.FETCH_PRODUCT_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ProductsActions.FETCH_PRODUCT_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ProductsActions.FETCH_PRODUCT_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

/**
 * Thunk
 */
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsArray = convertCollectionSnapShotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsArray));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};
