import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filters, ratingPoints } from '../../../constants/app';

import Buttons from '../Buttons';
import YearFilter from './YearFilter';
import Select from './Select';

function FilterPayload(props) {
  const {
    currentRating,
    currentGenre,
    allGenres,
  } = props;
  return (
    <section>
      <YearFilter />
      { allGenres && <Select selected={currentGenre} allGenres={allGenres} /> }
      <Select selected={currentRating} ratingPoints={ratingPoints} />
      <Buttons elementName={filters} />
    </section>
  );
}

FilterPayload.propTypes = {
  currentRating: PropTypes.string,
  currentGenre: PropTypes.string,
  allGenres: PropTypes.array,
};

FilterPayload.defaultProps = {
  currentRating: '',
  currentGenre: '',
  allGenres: [],
};

const mapStateToProps = (state) => (
  {
    currentRating: state.movie.rating,
    currentGenre: state.movie.genre,
    allGenres: state.allGenres,
  }
);

export default connect(mapStateToProps, null)(FilterPayload);
