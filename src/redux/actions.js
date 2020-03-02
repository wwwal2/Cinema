import {
  ADD_RATING,
  ADD_GENRE,
  ADD_YEAR,
  ADD_ALL_GENRES,
  ADD_RESULTS,
  ADD_UI_PAGE_NUM,
  TOGGLE_FAVORITE,
  SHOW_DETAILS,
  ADD_DETAILS_ID,
  UPDATE,
  RESET_FILTERS,
  RESET_OPTIONS,
  CHANGE_CARD_NUM,
  DEFINE_SECTION,
  ADD_QUERY,
  ADD_URL_DATA,
} from '../constants/actionTypes';

export const addRating = (payload) => ({ type: ADD_RATING, payload });
export const addGenre = (payload) => ({ type: ADD_GENRE, payload });
export const addYear = (payload) => ({ type: ADD_YEAR, payload });
export const addAllGenres = (payload) => ({ type: ADD_ALL_GENRES, payload });
export const addResults = (payload) => ({ type: ADD_RESULTS, payload });
export const addUiPageNum = (payload) => ({ type: ADD_UI_PAGE_NUM, payload });
export const addFavorite = (payload) => ({ type: TOGGLE_FAVORITE, payload });
export const addDetailsId = (payload) => ({ type: ADD_DETAILS_ID, payload });
export const showDetails = (payload) => ({ type: SHOW_DETAILS, payload });
export const defineSection = (payload) => ({ type: DEFINE_SECTION, payload });
export const addQuery = (payload) => ({ type: ADD_QUERY, payload });
export const update = () => ({ type: UPDATE });
export const resetFilters = () => ({ type: RESET_FILTERS });
export const resetOptions = () => ({ type: RESET_OPTIONS });
export const addUrlData = (payload) => ({ type: ADD_URL_DATA, payload });


export const changePayloadNum = (payload, target, distance) => (
  {
    type: CHANGE_CARD_NUM,
    payload,
    target,
    distance,
  }
);
