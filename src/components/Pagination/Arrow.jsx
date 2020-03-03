import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { update, addStatusData } from '../../redux/actions';
import { statusData } from '../../constants/app';

import pagination from './Pagination.scss';

function Arrow(props) {
  const {
    addStatusData,
    update,
    image,
    page,
  } = props;

  const changePage = (myPage) => {
    addStatusData(statusData.uiPage, myPage);
    update();
  };

  return (
    <img alt="arrow" src={image} onClick={() => changePage(page)} className={pagination.arrow} />
  );
}

Arrow.propTypes = {
  page: PropTypes.number,
  image: PropTypes.string,
  addStatusData: PropTypes.func,
  update: PropTypes.func,
};

Arrow.defaultProps = {
  page: 0,
  image: '',
  addStatusData: () => { },
  update: () => { },
};

export default connect(null, { update, addStatusData })(Arrow);
