import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import filters from '../FilterPayload.scss';

import { addMovieData } from '../../../../redux/actions';
import { validateLimits, onlyNumbers } from '../../../../utils';
import { movieData } from '../../../../constants/app';

function YearFilter(props) {
  const [inputYear, setInputYear] = useState('');
  const [timerId, setTimerId] = useState('');
  const [hintPosition, setHintPosition] = useState('hide');

  const {
    storeYear,
    maxYear,
    minYear,
    notification,
    addMovieData,
  } = props;

  const showNotification = () => {
    clearTimeout(timerId);
    setHintPosition('show');
    const timer = setTimeout(() => {
      setHintPosition('hide');
    }, 5000);
    setTimerId(timer);
  };

  const keyCheck = (event) => {
    const { value } = event.target;
    if (onlyNumbers(value)) {
      setInputYear(value);
    }
  };

  const submit = (event) => {
    console.log('event:', event.key);
    if (event.key === 'Enter' || !event.key) {
      if (validateLimits(maxYear, minYear, inputYear) || !inputYear) {
        addMovieData(movieData.year, inputYear);
      } else {
        showNotification();
      }
      setInputYear('');
    }
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
            onChange={keyCheck}
            onKeyPress={submit}
            onBlur={submit}
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
  maxYear: PropTypes.number,
  minYear: PropTypes.number,
  notification: PropTypes.string,
  addMovieData: PropTypes.func,
};

YearFilter.defaultProps = {
  storeYear: '',
  maxYear: 2020,
  minYear: 1950,
  notification: 'Please input correct date from \'1950\' to \'2020\'',
  addMovieData: () => { },
};

const mapStateToProps = (state) => ({ storeYear: state.movie.year });

export default connect(mapStateToProps, { addMovieData })(YearFilter);
