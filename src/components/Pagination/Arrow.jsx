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
    active,
  } = props;

  const changePage = () => {
    changeUiPage(section, page);
    update();
  };
  const className = active ? `${pagination.arrow} ${pagination.enabled}` : pagination.arrow;

  return (
    <img
      alt="arrow"
      src={image}
      onClick={changePage}
      className={className}
    />
  );
}

Arrow.propTypes = {
  active: PropTypes.bool,
  page: PropTypes.number,
  image: PropTypes.string,
  changeUiPage: PropTypes.func,
  update: PropTypes.func,
  section: PropTypes.string,
};

Arrow.defaultProps = {
  active: true,
  page: 0,
  image: '',
  section: '',
  changeUiPage: () => { },
  update: () => { },
};

export default connect(null, { update, changeUiPage })(Arrow);
