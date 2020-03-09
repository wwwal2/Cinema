import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filters, sections, statusData } from '../../constants/app';


import { styles } from './Settings.scss';

import {
  update,
  resetFilters,
  resetOptions,
  addStatusData,
} from '../../redux/actions';

function Buttons(props) {
  const {
    resetFilters,
    resetOptions,
    elementName,
    update,
    addStatusData,
  } = props;


  const onApply = () => {
    addStatusData(statusData.section, sections.main);
    update();
  };

  const onReset = (element) => {
    if (element === filters) {
      resetFilters();
    } else {
      resetOptions();
    }
    addStatusData(statusData.section, sections.main);
    update();
  };

  return (
    <section className={styles.actionBtnContainer}>

      <button
        type="button"
        onClick={onApply}
        className={`${styles.actionBtn} ${styles.apply}`}
      >
        Apply
      </button>

      <button
        type="button"
        onClick={() => onReset(elementName)}
        className={`${styles.actionBtn} ${styles.reset} ${styles.resetLink}`}
      >
        Reset
      </button>
    </section>
  );
}

Buttons.propTypes = {
  elementName: PropTypes.string,
  update: PropTypes.func,
  resetFilters: PropTypes.func,
  resetOptions: PropTypes.func,
  addStatusData: PropTypes.func,
};

Buttons.defaultProps = {
  elementName: '',
  update: () => { },
  resetFilters: () => { },
  resetOptions: () => { },
  addStatusData: () => { },
};

export default connect(null, {
  update,
  resetFilters,
  resetOptions,
  addStatusData,
})(Buttons);
