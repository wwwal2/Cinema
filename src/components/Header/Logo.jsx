import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '../../images/logo.png';
import header from './Header.scss';
import { sections, statusData } from '../../constants/app';

import { update, addStatusData } from '../../redux/actions';

function Logo(props) {
  const {
    addStatusData,
    update,
  } = props;

  const changePage = () => {
    addStatusData(statusData.uiPage, 1);
    addStatusData(statusData.section, sections.main);
    update();
  };

  return (
    <img alt="logo" src={logo} className={header.logo} onClick={changePage} />
  );
}

Logo.propTypes = {
  addStatusData: PropTypes.func,
  update: PropTypes.func,
};

Logo.defaultProps = {
  addStatusData: () => { },
  update: () => { },
};

export default connect(null, { addStatusData, update })(Logo);
