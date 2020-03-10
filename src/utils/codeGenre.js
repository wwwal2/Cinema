import { emptyField } from '../constants/app';

export default (genreName, tableOfGenres) => {
  if (genreName === emptyField) {
    return emptyField;
  }
  return tableOfGenres.find((genre) => genre.name === genreName).id;
};
