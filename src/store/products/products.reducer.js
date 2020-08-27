import { ProductsActions } from "./products.actions";
import { normalizeProductCollectionsArray } from "./products.utils";

const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
  collections: null,
  isFetching: false,
  errorMessage: null,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsActions.STORE_PRODUCT_COLLECTIONS_MAP:
      return {
        ...state,
        collections: normalizeProductCollectionsArray(action.payload),
      };

    case ProductsActions.FETCH_PRODUCT_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case ProductsActions.FETCH_PRODUCT_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: normalizeProductCollectionsArray(action.payload),
        isFetching: false,
      };

    case ProductsActions.FETCH_PRODUCT_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
