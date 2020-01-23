const initialState = {
  storeTest: 'empty',
  rating: '8',
  genre: 'Action',
  year: '2019',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        storeTest: action.payload,
      };
    case 'TEST2':
      return {
        ...state,
        storeTest: action.payload,
      };
    case 'ADDRATING':
      return {
        ...state,
        rating: action.payload,
      };
    case 'ADDGENRE':
      return {
        ...state,
        genre: action.payload,
      };
    case 'ADDYEAR':
      return {
        ...state,
        year: action.payload,
      };
    default:
      return state;
  }
}
