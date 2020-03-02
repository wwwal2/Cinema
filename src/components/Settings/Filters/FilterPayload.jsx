import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filters } from '../../../constants/other';

import Buttons from '../Buttons';
import YearFilter from './YearFilter';
import Select from './Select';

function FilterPayload(props) {
  const {
    ratingPoints,
    currentRating,
    currentGenre,
    allGenres,
  } = props;
  const blancGenre = [{ id: ' ', name: ' ' }];
  return (
    <section>
      <YearFilter />
      { allGenres && <Select selected={currentGenre} allGenres={blancGenre.concat(allGenres)} /> }
      <Select selected={currentRating} ratingPoints={ratingPoints} />
      <Buttons elementName={filters} />
    </section>
  );
}

const mapStateToProps = (state) => (
  {
    currentRating: state.movie.rating,
    currentGenre: state.movie.genre,
    allGenres: state.allGenres,
  }
);

export default connect(mapStateToProps, null)(FilterPayload);

FilterPayload.propTypes = {
  ratingPoints: PropTypes.array,
  currentRating: PropTypes.string,
  currentGenre: PropTypes.string,
  allGenres: PropTypes.array,
};

FilterPayload.defaultProps = {
  ratingPoints: [' ', 3, 4, 5, 6, 7, 8, 9],
  currentRating: '',
  currentGenre: '',
  allGenres: [],
};
