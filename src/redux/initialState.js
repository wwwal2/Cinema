import { currentCardsNum } from '../constants/app';

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
  uiPage: {
    main: 1,
    popular: 1,
    favorite: 1,
    search: 1,
  },
  favorite: {
    favoriteMovies: [],
    favoriteIds: [],
  },
  allGenres: [],
  detailsId: 0,
  searchQuery: ' ',
};
