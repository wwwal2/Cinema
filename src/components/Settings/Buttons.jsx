import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filters, sections } from '../../constants/app';


import {
  actionBtn,
  reset,
  apply,
  actionBtnContainer,
  resetLink,
} from './Settings.scss';

import {
  update,
  resetFilters,
  resetOptions,
  addUiPageNum,
  defineSection,
} from '../../redux/actions';

function Buttons(props) {
  const {
    resetFilters,
    resetOptions,
    elementName,
    update,
    defineSection,
  } = props;


  const onApply = () => {
    defineSection(sections.main);
    update();
  };

  const onReset = (element) => {
    if (element === filters) {
      resetFilters();
    } else {
      resetOptions();
    }
    defineSection(sections.main);
    update();
  };

  return (
    <section className={actionBtnContainer}>

      <button
        type="button"
        onClick={onApply}
        className={`${actionBtn} ${apply}`}
      >
        Apply
      </button>

      <button
        type="button"
        onClick={() => onReset(elementName)}
        className={`${actionBtn} ${reset} ${resetLink}`}
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
  defineSection: PropTypes.func,
};

Buttons.defaultProps = {
  elementName: '',
  update: () => { },
  resetFilters: () => { },
  resetOptions: () => { },
  defineSection: () => { },
};

export default connect(null, {
  update,
  resetFilters,
  resetOptions,
  addUiPageNum,
  defineSection,
})(Buttons);
