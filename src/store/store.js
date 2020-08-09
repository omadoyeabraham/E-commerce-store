import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root.reducer";

/**
 * Create our redux store and also apply needed middleware to the store
 */

// Middleware for the redux store
const middlewares = [];

if (["local", "development"].includes(process.env.NODE_ENV)) {
  middlewares.push(logger);
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default { store, persistor };
