import { CHANGE_MODE } from "actions/constants";

export default (state = "light", action) => {
  switch (action.type) {
    case CHANGE_MODE:
      state = action.payload;
      return state;

    default:
      return state;
  }
};
