import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  addUiPageNum,
  update,
  defineSection,
  showDetails,
} from '../../redux/actions';
import { sections } from '../../constants/app';
import header from './Header.scss';

function Tab(props) {
  const {
    tabName,
    addUiPageNum,
    defineSection,
    update,
    showDetails,
  } = props;

  const changeTab = (value) => {
    addUiPageNum(1);
    defineSection(sections[value.toLowerCase()]);
    showDetails(false);
    update();
  };

  return (
    <button
      key={tabName}
      className={header.tabs}
      onClick={() => changeTab(tabName)}
      type="button"
    >
      {tabName}
    </button>
  );
}

Tab.propTypes = {
  tabName: PropTypes.string,
  addUiPageNum: PropTypes.func,
  defineSection: PropTypes.func,
  showDetails: PropTypes.func,
  update: PropTypes.func,
};

Tab.defaultProps = {
  tabName: '',
  addUiPageNum: () => { },
  defineSection: () => { },
  showDetails: () => { },
  update: () => { },
};

export default connect(null, {
  addUiPageNum,
  update,
  defineSection,
  showDetails,
})(Tab);
