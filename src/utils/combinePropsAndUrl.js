export default (props, url) => {
  const updatedObject = url ? {
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
      ...props.cardsNum,
      [url.section]: url.cardsNum || props.cardsNum[url.section],
    },
    uiPage: {
      ...props.uiPage,
      [url.section]: url.page || props.cardsNum[url.section],
    },
  }
    : props;
  return updatedObject;
};
