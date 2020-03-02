import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '../../images/logo.png';
import header from './Header.scss';
import { sections } from '../../constants/app';

import { addUiPageNum, update, defineSection } from '../../redux/actions';

function Logo(props) {
  const {
    addUiPageNum,
    update,
    defineSection,
  } = props;

  const changePage = () => {
    addUiPageNum(1);
    defineSection(sections.main);
    update();
  };

  return (
    <img alt="logo" src={logo} className={header.logo} onClick={changePage} />
  );
}

Logo.propTypes = {
  addUiPageNum: PropTypes.func,
  update: PropTypes.func,
  defineSection: PropTypes.func,
};

Logo.defaultProps = {
  addUiPageNum: () => { },
  defineSection: () => { },
  update: () => { },
};

export default connect(null, { addUiPageNum, update, defineSection })(Logo);
