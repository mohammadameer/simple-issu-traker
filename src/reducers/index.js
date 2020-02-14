import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux-immer";
import produce from "immer";

import issues from "./issues";

const rootReducer = combineReducers(produce, {
  issues,
  form: formReducer
});

export default rootReducer;
