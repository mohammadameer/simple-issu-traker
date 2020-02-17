import {
  CREATE_ISSUE,
  CREATE_ISSUE_ERROR,
  LOAD_ISSUES,
  LOAD_ISSUES_ERROR,
  REMOVE_ISSUE,
  REMOVE_ISSUE_ERROR,
  GET_ISSUE_ERROR,
  GET_ISSUE,
  UPDATE_ISSUE,
  UPDATE_ISSUE_ERROR,
  RESET
} from "actions/constants";

const initialState = {
  all: [],
  activeIssue: null,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ISSUE:
      state.all.push(action.payload.issue);
      return state;
    case LOAD_ISSUES:
      state.all = action.payload.issues;
      return state;
    case REMOVE_ISSUE:
      state.all = state.all.filter(issue => +issue.id !== action.payload);
      state.all = state.all.filter(issue => issue._id !== action.payload);
      return state;
    case GET_ISSUE:
      state.activeIssue = action.payload.issue;
      return state;
    case UPDATE_ISSUE:
      state.all[
        state.all.findIndex(issue => +issue.id === +action.payload.issue.id)
      ] = action.payload.issue;
      state.all[
        state.all.findIndex(issue => issue._id === action.payload.issue.id)
      ] = action.payload.issue;
      state.activeIssue = action.payload.issue;
      return state;

    case RESET:
      state.all = [];
      state.activeIssue = null;
      return state;

    case UPDATE_ISSUE_ERROR:
    case GET_ISSUE_ERROR:
    case REMOVE_ISSUE_ERROR:
    case LOAD_ISSUES_ERROR:
    case CREATE_ISSUE_ERROR:
      state.error = action.payload;
      return state;

    default:
      return state;
  }
};
