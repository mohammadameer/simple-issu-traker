import { CREATE_TICKET, CREATE_TICKET_ERROR } from "actions/constants";

export default (state, action) => {
  switch (action.type) {
    case CREATE_TICKET:
      return state;
      break;
    case CREATE_TICKET_ERROR:
      return state;
      break;
      defautl: return state;
  }
};
