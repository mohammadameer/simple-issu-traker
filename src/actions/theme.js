import { CHANGE_MODE } from "./constants";

export const changeMode = mode => {
  return dispatch =>
    dispatch({
      type: CHANGE_MODE,
      payload: mode
    });
};
