import { saveSettings } from '../../utils';
import initialState from '../initialState';

import {
  RESET_FILTERS,
  ADD_URL_DATA,
  ADD_MOVIE_DATA,
} from '../../constants/actionTypes';

export default (state = initialState.movie, action) => {
  switch (action.type) {
    case RESET_FILTERS:
      saveSettings('movie', initialState.movie);
      return {
        ...initialState.movie,
      };

    case ADD_MOVIE_DATA:
      saveSettings('movie', state, action.target, action.payload);
      return {
        ...state,
        [action.target]: action.payload,
      };

    case ADD_URL_DATA:
      const { year, genre, rating } = action.payload;
      return {
        ...state,
        year: year || state.year,
        genre: genre || state.genre,
        rating: rating || state.rating,
      };

    default:
      return state;
  }
};
