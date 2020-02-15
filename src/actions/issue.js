import {
  CREATE_ISSUE,
  CREATE_ISSUE_ERROR,
  LOAD_ISSUES,
  LOAD_ISSUES_ERROR,
  REMOVE_ISSUE,
  REMOVE_ISSUE_ERROR,
  GET_ISSUE,
  GET_ISSUE_ERROR,
  UPDATE_ISSUE,
  UPDATE_ISSUE_ERROR
} from "./constants";
import { postData, getData, deleteData, putData } from "./index";

const ROOT_URL = "issues";

export const getIssues = () => {
  const url = `${ROOT_URL}/`;

  return dispatch => getData(LOAD_ISSUES, LOAD_ISSUES_ERROR, url, dispatch);
};

export const createIssue = data => {
  const url = `${ROOT_URL}/`;

  return dispatch =>
    postData(CREATE_ISSUE, CREATE_ISSUE_ERROR, url, dispatch, data);
};

export const removeIssue = id => {
  const url = `${ROOT_URL}/${id}/`;

  return dispatch =>
    deleteData(REMOVE_ISSUE, REMOVE_ISSUE_ERROR, url, dispatch);
};

export const getIssue = id => {
  const url = `${ROOT_URL}/${id}/`;

  return dispatch => {
    getData(GET_ISSUE, GET_ISSUE_ERROR, url, dispatch);
  };
};

export const updateIssue = (id, data) => {
  const url = `${ROOT_URL}/${id}`;

  return dispatch =>
    putData(UPDATE_ISSUE, UPDATE_ISSUE_ERROR, url, dispatch, data);
};
