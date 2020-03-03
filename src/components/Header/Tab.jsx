import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  update,
  addStatusData,
} from '../../redux/actions';
import { sections, statusData } from '../../constants/app';
import { tab, active } from './Header.scss';

function Tab(props) {
  const {
    tabName,
    update,
    addStatusData,
    currentSection,
  } = props;

  const changeTab = (value) => {
    addStatusData(statusData.uiPage, 1);
    addStatusData(statusData.section, sections[value.toLowerCase()]);
    addStatusData(statusData.detailsTab, false);
    update();
  };

  return (
    <button
      key={tabName}
      className={currentSection === tabName.toLowerCase() ? `${tab} ${active}` : tab}
      onClick={() => changeTab(tabName)}
      type="button"
    >
      {tabName}
    </button>
  );
}

Tab.propTypes = {
  tabName: PropTypes.string,
  currentSection: PropTypes.string,
  addStatusData: PropTypes.func,
  update: PropTypes.func,
};

Tab.defaultProps = {
  tabName: '',
  currentSection: '',
  addStatusData: () => { },
  update: () => { },
};

const mapStateToProps = (state) => (
  {
    currentSection: state.status.section,
  }
);
export default connect(mapStateToProps, { addStatusData, update })(Tab);
