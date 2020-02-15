import { CHANGE_DATA_SOURCE } from "./constants";

export const changeDataSource = dataSource => {
  return dispatch =>
    dispatch({
      type: CHANGE_DATA_SOURCE,
      payload: dataSource
    });
};
