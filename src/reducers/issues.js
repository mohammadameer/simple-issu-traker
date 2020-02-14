import {
  CREATE_ISSUE,
  CREATE_ISSUE_ERROR,
  LOAD_ISSUES,
  LOAD_ISSUES_ERROR,
  REMOVE_ISSUES,
  REMOVE_ISSUES_ERROR
} from "actions/constants";

const initialState = {
  all: [],
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
    case REMOVE_ISSUES:
      state.all = state.all.filter(issue =>
        action.payload.issues.includes(issue.id)
      );
      return state;

    case REMOVE_ISSUES_ERROR:
    case LOAD_ISSUES_ERROR:
    case CREATE_ISSUE_ERROR:
      state.error = action.payload;
      return state;

    default:
      return state;
  }
};
