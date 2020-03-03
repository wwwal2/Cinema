import {
  ADD_RESULTS,
  UPDATE,
  ADD_URL_DATA,
  ADD_STATUS_DATA,
} from '../../constants/actionTypes';

import initialState from '../initialState';

export default (state = initialState.status, action) => {
  switch (action.type) {
    case ADD_RESULTS:
      return {
        ...state,
        totalResults: action.payload,
      };
    case ADD_STATUS_DATA:
      return {
        ...state,
        [action.target]: action.payload,
      };
    case UPDATE:
      return {
        ...state,
        updateCounter: state.updateCounter + 1,
      };
    case ADD_URL_DATA:
      const { section, page } = action.payload;
      return {
        ...state,
        uiPage: Number(page) || state.uiPage,
        section: section || state.section,
      };
    default:
      return state;
  }
};
