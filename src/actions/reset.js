import { RESET } from "./constants";

export const reset = () => {
  return dispatch =>
    dispatch({
      type: RESET
    });
};
