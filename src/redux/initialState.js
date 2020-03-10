import { currentCardsNum, emptyField } from '../constants/app';

export default {
  movie: {
    year: emptyField,
    genre: emptyField,
    rating: emptyField,
  },
  status: {
    totalResults: 0,
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
  searchQuery: '',
};
