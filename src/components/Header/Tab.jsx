import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  update,
  addStatusData,
} from '../../redux/actions';
import { sections, statusData } from '../../constants/app';
import header from './Header.scss';

function Tab(props) {
  const { tabName, update, addStatusData } = props;

  const changeTab = (value) => {
    addStatusData(statusData.uiPage, 1);
    addStatusData(statusData.section, sections[value.toLowerCase()]);
    addStatusData(statusData.detailsTab, false);
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
  addStatusData: PropTypes.func,
  update: PropTypes.func,
};

Tab.defaultProps = {
  tabName: '',
  addStatusData: () => { },
  update: () => { },
};

export default connect(null, { addStatusData, update })(Tab);
