import { saveSettings } from '../../utils';
import initialState from '../initialState';

import {
  // ADD_RATING,
  // ADD_GENRE,
  // ADD_YEAR,
  RESET_FILTERS,
  ADD_URL_DATA,
  ADD_MOVIE_DATA,
} from '../../constants/actionTypes';

export default (state = initialState.movie, action) => {
  switch (action.type) {
    // case ADD_RATING:
    //   saveSettings('movie', state, action.payload, 'rating');
    //   return {
    //     ...state,
    //     rating: action.payload,
    //   };

    // case ADD_YEAR:
    //   saveSettings('movie', state, action.payload, 'year');
    //   return {
    //     ...state,
    //     year: action.payload,
    //   };

    // case ADD_GENRE:
    //   saveSettings('movie', state, action.payload, 'genre');
    //   return {
    //     ...state,
    //     genre: action.payload,
    //   };

    case RESET_FILTERS:
      saveSettings('movie', initialState);
      return {
        ...initialState,
      };

    case ADD_MOVIE_DATA:
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
