import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux-immer";
import produce from "immer";

import issues from "./issues";
import mode from "./mode";
import data from "./data";

const rootReducer = combineReducers(produce, {
  issues,
  mode,
  data,
  form: formReducer
});

export default rootReducer;
