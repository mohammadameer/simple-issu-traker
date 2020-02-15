import { CHANGE_DATA_SOURCE } from "actions/constants";

export default (state = "mock", action) => {
  switch (action.type) {
    case CHANGE_DATA_SOURCE:
      state = action.payload;
      return state;

    default:
      return state;
  }
};
