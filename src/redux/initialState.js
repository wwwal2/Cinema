import { currentCardsNum } from '../constants/other';

export default {
  movie: {
    year: ' ',
    genre: ' ',
    rating: ' ',
  },
  status: {
    totalResults: 0,
    uiPage: 1,
    updateCounter: 0,
    detailsTab: false,
    section: 'main',
  },
  cardsNum: {
    main: currentCardsNum,
    popular: currentCardsNum,
    favorite: currentCardsNum,
    search: currentCardsNum,
  },
  favorite: {
    favoriteMovies: [],
    favoriteIds: [],
  },
  allGenres: [],
  detailsId: 0,
  searchQuery: ' ',
};
