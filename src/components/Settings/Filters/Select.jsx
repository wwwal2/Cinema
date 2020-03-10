import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMovieData } from '../../../redux/actions';
import filters from './FilterPayload.scss';

function Select(props) {
  const {
    selected,
    allGenres,
    ratingPoints,
    addMovieData,
  } = props;
  const genres = allGenres.map((genre) => genre.name);
  const defineOption = (filter, value) => {
    if (filter === 'genre' || value === 'Empty' || value === 10) {
      return value;
    }
    return `${value} - ${value + 0.9}`;
  };
  const generateSelect = (options, current, id) => {
    return (
      <section className={filters.gridContainer}>
        <select
          onChange={(event) => addMovieData(id, event.target.value)}
          value={current}
          id={id}
          className={filters.select}
        >
          {options.map((option) => {
            return (
              <option value={option} key={option}>
                {defineOption(id, option)}
              </option>
            );
          })}
        </select>
        <label htmlFor={id} className={filters.label}>
          {`select ${id}`}
        </label>
      </section>
    );
  };
  return ratingPoints[0]
    ? generateSelect(ratingPoints, selected, 'rating')
    : generateSelect(genres, selected, 'genre');
}

Select.propTypes = {
  allGenres: PropTypes.array,
  ratingPoints: PropTypes.array,
  addRating: PropTypes.func,
  addGenre: PropTypes.func,
  addMovieData: PropTypes.func,
  readTheStore: PropTypes.object,
};

Select.defaultProps = {
  allGenres: [],
  ratingPoints: [],
  addMovieData: () => { },
  readTheStore: {},
};

export default connect(null, { addMovieData })(Select);
