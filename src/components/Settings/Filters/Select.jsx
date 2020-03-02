import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRating, addGenre } from '../../../redux/actions';

import generateSelect from './generateSelect';

function Select(props) {
  const {
    selected,
    allGenres,
    ratingPoints,
    addRating,
    addGenre,
  } = props;

  return (
    ratingPoints[0]
      ? generateSelect(ratingPoints, selected, addRating, 'rating')
      : generateSelect(allGenres.map((genre) => genre.name), selected, addGenre, 'genre')
  );
}

Select.propTypes = {
  allGenres: PropTypes.array,
  ratingPoints: PropTypes.array,
  addRating: PropTypes.func,
  addGenre: PropTypes.func,
  readTheStore: PropTypes.object,
};

Select.defaultProps = {
  allGenres: [],
  ratingPoints: [],
  addRating: () => { },
  addGenre: () => { },
  readTheStore: {},
};

export default connect(null, { addRating, addGenre })(Select);
