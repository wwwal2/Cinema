export default (genreName, tableOfGenres) => {
  if (genreName === ' ') {
    return ' ';
  }
  return tableOfGenres.find((genre) => genre.name === genreName).id;
};
