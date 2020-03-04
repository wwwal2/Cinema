import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import arrowLeft from '../../images/arr3.png';
import arrowRight from '../../images/arr2.png';
import { inRange } from '../../utils';
import pagination from './Pagination.scss';

import PaginationBoard from './PaginationBoard';
import Arrow from './Arrow';


function Pagination(props) {
  const { totalPages, currentPage, detailsTab } = props;
  if (totalPages > 1 && !detailsTab) {
    return (
      <nav className={pagination.container}>
        <Arrow page={inRange(currentPage, -1, totalPages)} image={arrowLeft} />
        <PaginationBoard totalPages={totalPages} currentPage={currentPage} />
        <Arrow page={inRange(currentPage, 1, totalPages)} image={arrowRight} />
      </nav>
    );
  }
  return null;
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  detailsTab: PropTypes.bool,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  detailsTab: false,
  totalPages: 1,
  currentPage: 1,
};

const mapStateToProps = (state) => (
  {
    totalPages: Math.ceil(state.status.totalResults / state.cardsNum[state.status.section]),
    detailsTab: state.status.detailsTab,
    currentPage: state.uiPage[state.status.section],
  }
);

export default connect(mapStateToProps, null)(Pagination);
