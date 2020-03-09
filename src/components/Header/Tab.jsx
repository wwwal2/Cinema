import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { update, addStatusData } from '../../redux/actions';
import { sections, statusData } from '../../constants/app';
import header from './Header.scss';

function Tab(props) {
  const {
    tabName,
    update,
    addStatusData,
    currentSection,
  } = props;

  const changeTab = (value) => {
    addStatusData(statusData.section, sections[value.toLowerCase()]);
    addStatusData(statusData.detailsTab, false);
    update();
  };

  return (
    <Link to="/" className={header.link}>
      <button
        key={tabName}
        className={currentSection === tabName.toLowerCase() ? `${header.tab} ${header.active}` : header.tab}
        onClick={() => changeTab(tabName)}
        type="button"
      >
        {tabName}
      </button>
    </Link>

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
