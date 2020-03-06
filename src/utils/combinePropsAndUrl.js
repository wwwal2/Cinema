export default (props, url) => {
  return {
    ...props,
    movie: {
      genre: url.genre || props.movie.genre,
      rating: url.rating || props.movie.rating,
      year: url.year || props.movie.year,
    },
    status: {
      section: url.section || props.status.section,
    },
    cardsNum: {
      [url.section]: url.cardsNum,
    },
    uiPage: {
      [url.section]: url.page,
    },
  };
};
