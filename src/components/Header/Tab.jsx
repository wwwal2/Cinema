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

  const changeTab = () => {
    addStatusData(statusData.section, sections[tabName.toLowerCase()]);
    addStatusData(statusData.detailsTab, false);
    update();
  };

  const className = currentSection === tabName.toLowerCase() ? `${header.tab} ${header.active}` : header.tab;

  return (
    <li className={header.link}>
      <Link to="/" className={header.link}>
        <button
          key={tabName}
          className={className}
          onClick={changeTab}
          type="button"
        >
          {tabName}
        </button>
      </Link>
    </li>
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
