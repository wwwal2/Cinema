import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filters, ratingPoints } from '../../../constants/app';

import Buttons from '../Buttons';
import YearFilter from './YearFilter';
import Select from './Select';

function Filters(props) {
  const {
    currentRating,
    currentGenre,
    allGenres,
  } = props;
  return (
    <section>
      <YearFilter />
      { allGenres && <Select selected={currentGenre} allOptions={allGenres} filterName="genre" /> }
      <Select selected={currentRating} allOptions={ratingPoints} filterName="rating" />
      <Buttons elementName={filters} />
    </section>
  );
}

Filters.propTypes = {
  currentRating: PropTypes.string,
  currentGenre: PropTypes.string,
  allGenres: PropTypes.array,
};

Filters.defaultProps = {
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

export default connect(mapStateToProps, null)(Filters);
