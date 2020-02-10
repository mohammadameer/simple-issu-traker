import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux-immer";
import produce from "immer";

import ticket from "./ticket";

const rootReducer = combineReducers(produce, {
  ticket,
  form: formReducer
});

export default rootReducer;
