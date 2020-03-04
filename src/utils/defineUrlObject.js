export default (object) => {
  const {
    section,
    uiPage,
    cardsNum,
    year,
    genre,
    rating,
    query,
  } = object;
  switch (object.section) {
    case 'main':
      return {
        section,
        page: uiPage.main,
        cardsNum,
        year,
        genre,
        rating,
      };

    case 'popular':
      return {
        section,
        page: uiPage.popular,
        cardsNum,
      };

    case 'favorite':
      return {
        section,
        cardsNum,
        page: uiPage.favorite,
      };

    case 'search':
      return {
        section,
        page: uiPage.search,
        cardsNum,
        query,
      };

    default:
      break;
  }
};
