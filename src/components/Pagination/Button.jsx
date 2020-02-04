import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';

import pagination from './Pagination.scss';

function Button(props) {
  const {
    page,
    btnClass,
    addUIPageNum,
    update,
    disabled,
  } = props;

  const changePage = (value) => {
    addUIPageNum(value);
    update();
  };

  return (
    <Link
      to={`/${page}`}
      // className={pagination[btnClass]}
      key={page}
    >
      <button
        type="button"
        className={pagination[btnClass]}
        onClick={() => changePage(page)}
        disabled={disabled}
      >
        {page}
      </button>
    </Link>
  );
}

const mapDispatchToProps = (dispatch) => {
  const { addUIPageNum, update } = bindActionCreators(actions, dispatch);
  return {
    addUIPageNum: (payload) => addUIPageNum(payload),
    update: () => update(),
  };
};

export default connect(null, mapDispatchToProps)(Button);

Button.propTypes = {
  page: PropTypes.node,
  btnClass: PropTypes.string,
  addUIPageNum: PropTypes.func,
  update: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  page: 0,
  btnClass: '',
  addUIPageNum: () => { },
  update: () => { },
  disabled: false,
};
