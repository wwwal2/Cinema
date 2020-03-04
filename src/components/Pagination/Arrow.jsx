import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeUiPage, update } from '../../redux/actions';

import pagination from './Pagination.scss';

function Arrow(props) {
  const {
    changeUiPage,
    update,
    image,
    page,
    section,
  } = props;

  const changePage = (myPage) => {
    changeUiPage(section, myPage);
    update();
  };

  return (
    <img alt="arrow" src={image} onClick={() => changePage(page)} className={pagination.arrow} />
  );
}

Arrow.propTypes = {
  page: PropTypes.number,
  image: PropTypes.string,
  changeUiPage: PropTypes.func,
  update: PropTypes.func,
  section: PropTypes.string,
};

Arrow.defaultProps = {
  page: 0,
  image: '',
  section: '',
  changeUiPage: () => { },
  update: () => { },
};

const mapStateToProps = (state) => (
  { section: state.status.section }
);
export default connect(mapStateToProps, { update, changeUiPage })(Arrow);
