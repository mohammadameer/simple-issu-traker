import Axios from "axios";

Axios.defaults.baseURL = "/api";

const errorHandler = (type, error, dispatch) => {
  const errorMessage = error && error.resposne ? error.response.data : error;

  return dispatch({
    type,
    payload: errorMessage
  });
};

export const getData = (
  type,
  typeError,
  url,
  dispatch,
  callback,
  callbackError
) => {
  return Axios.get(url)
    .then(response => {
      dispatch({
        type,
        payload: response.data
      });
      if (callback) callback(response.data);
    })
    .catch(error => {
      errorHandler(typeError, error, dispatch);
      if (callbackError) callbackError(error.response);
    });
};

export const postData = (
  type,
  typeError,
  url,
  dispatch,
  data,
  callback = null,
  callbackError = null
) => {
  return Axios.post(url, data)
    .then(response => {
      dispatch({
        type,
        payload: response.data
      });
      if (callback) callback(response.data);
    })
    .catch(error => {
      errorHandler(typeError, error, dispatch);
      if (callbackError) callbackError(error.response);
    });
};

export const putData = (
  type,
  typeError,
  url,
  dispatch,
  data,
  callback = null,
  callbackError = null
) => {
  return Axios.put(url, data)
    .then(response => {
      dispatch({
        type,
        payload: response.data
      });
      if (callback) callback(response.data);
    })
    .catch(error => {
      errorHandler(typeError, error, dispatch);
      if (callbackError) callbackError(error.response);
    });
};

export const deleteData = (
  type,
  typeError,
  url,
  dispatch,
  data,
  callback = null,
  callbackError = null
) => {
  return Axios.delete(url)
    .then(response => {
      dispatch({
        type,
        payload: response.data
      });
      if (callback) callback(response.data);
    })
    .catch(error => {
      errorHandler(typeError, error, dispatch);
      if (callbackError) callbackError(error.response);
    });
};
