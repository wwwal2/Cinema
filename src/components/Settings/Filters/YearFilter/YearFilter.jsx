import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import filters from '../FilterPayload.scss';

import { addYear } from '../../../../redux/actions';
import { validateLimits, onlyNumbers } from '../../../../utils';

function useHook(initialValue) {
  const [value, setValue] = useState(initialValue);
  function set(val) {
    setValue(val);
  }
  return { value, set };
}

function YearFilter(props) {
  const inputYear = useHook('');
  const timerId = useHook('');
  const hintPosition = useHook('hide');

  const {
    storeYear,
    maxYear,
    minYear,
    notification,
    addYear,
  } = props;

  const showNotification = () => {
    clearTimeout(timerId.value);
    hintPosition.set('show');
    const timer = setTimeout(() => {
      hintPosition.set('hide');
    }, 5000);
    timerId.set(timer);
  };

  const keyCheck = (event) => {
    const { value } = event.target;
    if (onlyNumbers(value)) {
      inputYear.set(value);
    }
  };

  const submitCheck = (event) => {
    if (event.key === 'Enter') {
      if (validateLimits(maxYear, minYear, inputYear.value)) {
        addYear(inputYear.value);
      } else {
        showNotification();
      }
      inputYear.set('');
    }
  };

  return (
    <div>
      <div className={filters.inputContainer}>
        <div className={filters.gridContainer}>
          <input
            id="filterInput"
            className={filters.filterInput}
            value={inputYear.value}
            type="text"
            placeholder={storeYear}
            onKeyPress={submitCheck}
            onChange={keyCheck}
          />
          <label
            htmlFor="filterInput"
            className={filters.label}
          >
            input year
          </label>
        </div>

        <div className={filters[hintPosition.value]}>
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
  addYear: PropTypes.func,
};

YearFilter.defaultProps = {
  storeYear: '',
  maxYear: 2020,
  minYear: 1950,
  notification: 'Please input correct date from \'1950\' to \'2020\'',
  addYear: () => { },
};

const mapStateToProps = (state) => ({ storeYear: state.movie.year });

export default connect(mapStateToProps, { addYear })(YearFilter);
