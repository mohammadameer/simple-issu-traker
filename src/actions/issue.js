import {
  CREATE_ISSUE,
  CREATE_ISSUE_ERROR,
  LOAD_ISSUES,
  LOAD_ISSUES_ERROR,
  REMOVE_ISSUES,
  REMOVE_ISSUES_ERROR
} from "./constants";
import { postData, getData, deleteData } from "./index";

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

export const removeIssues = data => {
  const url = `${ROOT_URL}/`;

  return dispatch =>
    deleteData(REMOVE_ISSUES, REMOVE_ISSUES_ERROR, url, dispatch, data);
};
