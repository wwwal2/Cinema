import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMovieData } from '../../../redux/actions';
import { emptyField } from '../../../constants/app';
import filters from './FilterPayload.scss';

function Select(props) {
  const {
    allOptions,
    selected,
    filterName,
    addMovieData,
  } = props;

  const option = (name, value) => (<option key={name} value={value}>{name}</option>);
  const defineAllOptions = () => {
    if (filterName === 'genre') {
      return allOptions.map((item) => option(item.name, item.name));
    }
    return allOptions.map((rate) => {
      return rate === 10
        ? option(rate, rate)
        : option(`${rate} - ${rate + 0.9}`, rate);
    });
  };
  const label = `select ${filterName}`;

  return (
    <section className={filters.gridContainer}>
      <select
        onChange={(event) => addMovieData(filterName, event.target.value)}
        value={selected}
        id={filterName}
        className={filters.select}
      >
        <option value={emptyField} hidden>
          {emptyField}
        </option>
        {defineAllOptions()}
      </select>
      <label htmlFor={filterName} className={filters.label}>
        {label}
      </label>
    </section>
  );
}

Select.propTypes = {
  selected: PropTypes.string,
  allOptions: PropTypes.array,
  addMovieData: PropTypes.func,
  filterName: PropTypes.string,
};

Select.defaultProps = {
  filterName: '',
  selected: '',
  allOptions: [],
  addMovieData: () => { },
};

export default connect(null, { addMovieData })(Select);
