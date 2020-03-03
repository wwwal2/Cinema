import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addStatusData, update } from '../../redux/actions';
import { statusData } from '../../constants/app';

import pagination from './Pagination.scss';

function Button(props) {
  const {
    page,
    btnClass,
    addStatusData,
    update,
    disabled,
  } = props;

  const changePage = (value) => {
    addStatusData(statusData.uiPage, value);
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
  addStatusData: PropTypes.func,
  update: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  page: 0,
  btnClass: '',
  addStatusData: () => { },
  update: () => { },
  disabled: false,
};

export default connect(null, { addStatusData, update })(Button);
