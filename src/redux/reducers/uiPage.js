import { ADD_UI_PAGE, ADD_URL_DATA } from '../../constants/actionTypes';
import initialState from '../initialState';

export default (state = initialState.uiPage, action) => {
  switch (action.type) {
    case ADD_UI_PAGE:
      return {
        ...state,
        [action.target]: action.payload,
      };
    case ADD_URL_DATA:
      const { section, page } = action.payload;
      return {
        ...state,
        [section]: Number(page) || state[section],
      };
    default:
      return state;
  }
};
