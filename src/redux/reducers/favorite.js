import { toggleFavorite } from '../../utils';
import { TOGGLE_FAVORITE } from '../../constants/actionTypes';
import initialState from '../initialState';

export default (state = initialState.favorite, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return toggleFavorite(state, action.payload);
    default:
      return state;
  }
};
