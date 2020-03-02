import checkFavorite from './checkFavorite';

export default (state, payload) => {
  if (checkFavorite(state.favoriteIds, payload.id)) {
    const index = state.favoriteIds.findIndex((id) => (id === payload.id));

    return {
      ...state,
      favoriteMovies: [
        ...state.favoriteMovies.slice(0, index), ...state.favoriteMovies.slice(index + 1),
      ],
      favoriteIds: [
        ...state.favoriteIds.slice(0, index), ...state.favoriteIds.slice(index + 1),
      ],
    };
  }
  return {
    ...state,
    favoriteMovies: [...state.favoriteMovies, payload],
    favoriteIds: [...state.favoriteIds, payload.id],
  };
};
