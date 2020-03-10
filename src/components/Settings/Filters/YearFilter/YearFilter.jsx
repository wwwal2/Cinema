import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import filters from '../FilterPayload.scss';

import { addMovieData } from '../../../../redux/actions';
import { validateLimits, onlyNumbers } from '../../../../utils';
import {
  movieData,
  maxYear,
  minYear,
  emptyField,
} from '../../../../constants/app';

function YearFilter(props) {
  const [inputYear, setInputYear] = useState('');
  const [timerId, setTimerId] = useState('');
  const [hintPosition, setHintPosition] = useState('hide');

  const { storeYear, addMovieData } = props;

  const notification = `Please input the date between ${minYear} and ${maxYear}`;

  const showNotification = () => {
    clearTimeout(timerId);
    setHintPosition('show');
    const timer = setTimeout(() => {
      setHintPosition('hide');
    }, 5000);
    setTimerId(timer);
  };

  const receiveKey = ({ key }) => {
    if (!inputYear) {
      return;
    }
    if (key === 'Enter' || !key) {
      if (validateLimits(maxYear, minYear, inputYear)) {
        addMovieData(movieData.year, inputYear);
      } else {
        showNotification();
        setInputYear(emptyField);
      }
    }
  };

  const changeValue = ({ target: { value } }) => {
    setInputYear(onlyNumbers(value));
  };

  const clearInput = () => {
    setInputYear('');
    addMovieData(movieData.year, '');
  };

  return (
    <div>
      <div className={filters.inputContainer}>
        <div className={filters.gridContainer}>
          <input
            id="filterInput"
            className={filters.filterInput}
            value={inputYear}
            type="text"
            placeholder={storeYear}
            onKeyPress={receiveKey}
            onChange={changeValue}
            onBlur={receiveKey}
            onFocus={clearInput}
          />
          <label
            htmlFor="filterInput"
            className={filters.label}
          >
            input year
          </label>
        </div>

        <div className={filters[hintPosition]}>
          {notification}
        </div>
      </div>
    </div>
  );
}

YearFilter.propTypes = {
  storeYear: PropTypes.string,
  addMovieData: PropTypes.func,
};

YearFilter.defaultProps = {
  storeYear: '',
  addMovieData: () => { },
};

const mapStateToProps = (state) => ({ storeYear: state.movie.year });

export default connect(mapStateToProps, { addMovieData })(YearFilter);
