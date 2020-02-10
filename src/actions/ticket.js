import {
  CREATE_TICKET,
  CREATE_TICKET_ERROR,
  LOAD_TICKETS,
  LOAD_TICKETS_ERROR
} from "./constants";
import { postData, getData } from "./index";

const ROOT_URL = "tickets";

export const getTickets = () => {
  const url = `${ROOT_URL}/`;

  return dispatch => getData(LOAD_TICKETS, LOAD_TICKETS_ERROR, url, dispatch);
};

export const createTicket = data => {
  const url = `${ROOT_URL}/`;

  return dispatch =>
    postData(CREATE_TICKET, CREATE_TICKET_ERROR, url, dispatch, data);
};
