import { CREATE_TICKET, CREATE_TICKET_ERROR } from "./constants";
import { postData } from "./index";

const ROOT_URL = "tickets";

export const createTicket = data => {
  const url = `${ROOT_URL}/`;
  return dispatch =>
    postData(CREATE_TICKET, CREATE_TICKET_ERROR, url, dispatch, data);
};
