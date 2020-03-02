import { ADD_QUERY, ADD_URL_DATA } from '../../constants/actionTypes';

export default (state = ' ', action) => {
  switch (action.type) {
    case ADD_QUERY:
      return action.payload;

    case ADD_URL_DATA:
      return action.payload.query || state;
    default:
      return state;
  }
};
