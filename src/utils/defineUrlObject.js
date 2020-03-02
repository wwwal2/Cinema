export default (object) => {
  const {
    section,
    page,
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
        page,
        cardsNum,
        year,
        genre,
        rating,
      };

    case 'popular':
      return {
        section,
        page,
        cardsNum,
      };

    case 'favorite':
      return {
        section,
        cardsNum,
      };

    case 'search':
      return {
        section,
        page,
        cardsNum,
        query,
      };

    default:
      break;
  }
};
