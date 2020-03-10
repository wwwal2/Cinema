import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filters, sections, statusData } from '../../constants/app';


import settings from './Settings.scss';

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

  const onReset = () => {
    if (elementName === filters) {
      resetFilters();
    } else {
      resetOptions();
    }
    addStatusData(statusData.section, sections.main);
    update();
  };

  const applyClassName = `${settings.actionBtn} ${settings.apply}`;
  const resetClassName = `${settings.actionBtn} ${settings.reset} ${settings.resetLink}`;

  return (
    <section className={settings.actionBtnContainer}>
      <button
        type="button"
        onClick={onApply}
        className={applyClassName}
      >
        Apply
      </button>
      <button
        type="button"
        onClick={onReset}
        className={resetClassName}
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
