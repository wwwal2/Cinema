import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addUiPageNum, update } from '../../redux/actions';


import pagination from './Pagination.scss';

function Button(props) {
  const {
    page,
    btnClass,
    addUiPageNum,
    update,
    disabled,
  } = props;

  const changePage = (value) => {
    addUiPageNum(value);
    update();
  };

  return (
    <a
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
    </a>
  );
}

Button.propTypes = {
  page: PropTypes.node,
  btnClass: PropTypes.string,
  addUiPageNum: PropTypes.func,
  update: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  page: 0,
  btnClass: '',
  addUiPageNum: () => { },
  update: () => { },
  disabled: false,
};

export default connect(null, { addUiPageNum, update })(Button);
