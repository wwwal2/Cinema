import { saveSettings } from '../../utils';
import { CHANGE_CARD_NUM, RESET_OPTIONS, ADD_URL_DATA } from '../../constants/actionTypes';
import initialState from '../initialState';

export default (state = initialState.cardsNum, action) => {
  switch (action.type) {
    case CHANGE_CARD_NUM:
      saveSettings('cardsNum', state, state[action.target] + action.payload, action.target);

      if (action.distance <= 0) {
        return state;
      }
      return {
        ...state,
        [action.target]: state[action.target] + action.payload,
      };
    case RESET_OPTIONS:
      saveSettings('cardsNum', initialState);
      return {
        ...initialState,
      };
    case ADD_URL_DATA:
      const { section, cardsNum } = action.payload;
      return {
        ...state,
        [section]: Number(cardsNum) || state[section],
      };
    default:
      return state;
  }
};
