import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeUiPage, update } from '../../redux/actions';

import pagination from './Pagination.scss';

function Button(props) {
  const {
    page,
    btnClass,
    changeUiPage,
    update,
    disabled,
    section,
  } = props;

  const changePage = () => {
    changeUiPage(section, page);
    update();
  };

  return (
    <a
      key={page}
    >
      <button
        type="button"
        className={pagination[btnClass]}
        onClick={changePage}
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
  changeUiPage: PropTypes.func,
  update: PropTypes.func,
  disabled: PropTypes.bool,
  section: PropTypes.string,
};

Button.defaultProps = {
  page: 0,
  btnClass: '',
  changeUiPage: () => { },
  update: () => { },
  disabled: false,
  section: '',
};

const mapStateToProps = (state) => (
  { section: state.status.section }
);
export default connect(mapStateToProps, { changeUiPage, update })(Button);
