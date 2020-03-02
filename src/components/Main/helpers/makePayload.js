import { sections, apiResultsPerPage } from '../../../constants/app';
import { codeGenre, calculateRequestProps } from '../../../utils';
import getItems from './getItems';

export default async (props) => {
  const {
    cardsNum: {
      main,
      popular,
      favorite,
      search,
    },
    movie: { year, rating, genre },
    status: { uiPage, section },
    favorite: { favoriteMovies },
    allGenres,
    searchQuery,
  } = props;
  switch (section) {
    case sections.main:
      const mainPayload = await getItems(
        'getMovies',
        [
          year,
          codeGenre(genre, allGenres),
          rating,
        ],
        main,
        uiPage,
      );
      return mainPayload;

    case sections.popular:
      const popularPayload = await getItems(
        'getPopular',
        [],
        popular,
        uiPage,
      );
      return popularPayload;

    case sections.search:
      const searchPayload = await getItems(
        'findMovie',
        [searchQuery],
        search,
        uiPage,
      );
      return searchPayload;

    case sections.favorite:
      const layout = calculateRequestProps(
        uiPage,
        favorite,
        apiResultsPerPage,
      );
      return {
        items: favoriteMovies.slice(
          layout.startRes,
          layout.startRes + favorite,
        ),
        totalResults: favoriteMovies.length,
      };
    default:
      return 'no props available';
  }
};
