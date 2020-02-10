import {
  CREATE_TICKET,
  CREATE_TICKET_ERROR,
  LOAD_TICKETS,
  LOAD_TICKETS_ERROR
} from "actions/constants";

const initialState = {
  all: [],
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TICKET:
      state.all.push(action.payload.ticket);
      return state;
    case LOAD_TICKETS:
      state.all = action.payload.tickets;
      return state;

    case LOAD_TICKETS_ERROR:
    case CREATE_TICKET_ERROR:
      state.error = action.payload;
      return state;

    default:
      return state;
  }
};
