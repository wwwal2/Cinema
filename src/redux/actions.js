import {
  ADD_ALL_GENRES,
  ADD_RESULTS,
  TOGGLE_FAVORITE,
  ADD_DETAILS_ID,
  UPDATE,
  RESET_FILTERS,
  RESET_OPTIONS,
  CHANGE_CARD_NUM,
  ADD_QUERY,
  ADD_URL_DATA,
  ADD_MOVIE_DATA,
  ADD_STATUS_DATA,
  CHANGE_UI_PAGE,
} from '../constants/actionTypes';

export const addAllGenres = (payload) => ({ type: ADD_ALL_GENRES, payload });
export const addResults = (payload) => ({ type: ADD_RESULTS, payload });
export const addFavorite = (payload) => ({ type: TOGGLE_FAVORITE, payload });
export const addDetailsId = (payload) => ({ type: ADD_DETAILS_ID, payload });
export const addQuery = (payload) => ({ type: ADD_QUERY, payload });
export const update = () => ({ type: UPDATE });
export const resetFilters = () => ({ type: RESET_FILTERS });
export const resetOptions = () => ({ type: RESET_OPTIONS });
export const addUrlData = (payload) => ({ type: ADD_URL_DATA, payload });

export const addMovieData = (target, payload) => ({ type: ADD_MOVIE_DATA, target, payload });

export const addStatusData = (target, payload) => ({ type: ADD_STATUS_DATA, target, payload });

export const changeUiPage = (target, payload) => ({ type: CHANGE_UI_PAGE, target, payload });

export const changePayloadNum = (payload, target, distance) => (
  {
    type: CHANGE_CARD_NUM,
    payload,
    target,
    distance,
  }
);
