import { ADD_ALL_GENRES } from '../../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ALL_GENRES:
      return action.payload;
    default:
      return state;
  }
};
