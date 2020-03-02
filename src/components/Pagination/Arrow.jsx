import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addUiPageNum, update } from '../../redux/actions';

import pagination from './Pagination.scss';

function Arrow(props) {
  const {
    addUiPageNum,
    update,
    image,
    page,
  } = props;

  const changePage = (myPage) => {
    addUiPageNum(myPage);
    update();
  };

  return (
    <img alt="arrow" src={image} onClick={() => changePage(page)} className={pagination.arrow} />
  );
}

Arrow.propTypes = {
  page: PropTypes.number,
  image: PropTypes.string,
  addUiPageNum: PropTypes.func,
  update: PropTypes.func,
};

Arrow.defaultProps = {
  page: 0,
  image: '',
  addUiPageNum: () => { },
  update: () => { },
};

export default connect(null, { addUiPageNum, update })(Arrow);
