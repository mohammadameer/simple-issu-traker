import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";

// combined reducers
import reducers from "./reducers/index";

// create the redux store and add some middlewares
const createStoreWithMiddleware = applyMiddleware(
  logger,
  reduxThunk
)(createStore);

//add combined reduces to the store
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
