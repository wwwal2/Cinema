import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import arrowLeft from '../../images/arr3.png';
import arrowLeftDisabled from '../../images/arrLeftDis.png';
import arrowRight from '../../images/arr2.png';
import arrowRightDisabled from '../../images/arrRightDis.png';

import { inRange } from '../../utils';
import pagination from './Pagination.scss';

import PaginationBoard from './PaginationBoard';
import Arrow from './Arrow';


function Pagination(props) {
  const {
    totalPages,
    currentPage,
    detailsTab,
    section,
  } = props;

  const leftArrowImg = currentPage > 1 ? arrowLeft : arrowLeftDisabled;
  const rightArrowImg = currentPage < totalPages ? arrowRight : arrowRightDisabled;

  return (totalPages > 1 && !detailsTab)
    && (
      <nav className={pagination.container}>
        <Arrow
          page={inRange(currentPage, -1, totalPages)}
          image={leftArrowImg}
          section={section}
          active={currentPage > 1}
        />
        <PaginationBoard
          totalPages={totalPages}
          currentPage={currentPage}
        />
        <Arrow
          page={inRange(currentPage, 1, totalPages)}
          image={rightArrowImg}
          section={section}
          active={currentPage < totalPages}
        />
      </nav>
    );
}

Pagination.propTypes = {
  section: PropTypes.string,
  totalPages: PropTypes.number,
  detailsTab: PropTypes.bool,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  section: '',
  detailsTab: false,
  totalPages: 1,
  currentPage: 1,
};

const mapStateToProps = (state) => (
  {
    totalPages: Math.ceil(state.status.totalResults / state.cardsNum[state.status.section]),
    detailsTab: state.status.detailsTab,
    currentPage: state.uiPage[state.status.section],
    section: state.status.section,
  }
);

export default connect(mapStateToProps, null)(Pagination);
