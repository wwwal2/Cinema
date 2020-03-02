import React from 'react';
import PropTypes from 'prop-types';

import { paginationShape } from '../../utils';
import Button from './Button';

import pagination from './Pagination.scss';

export default function PaginationBoard(props) {
  const { totalPages, currentPage, boardSideLength } = props;

  const assemble = (total, current) => {
    return paginationShape(total, current, boardSideLength).map((elem, index) => {
      if (elem === current) {
        return <Button page={elem} key={`pug${index}`} btnClass="currentPage" disabled={false} />;
      }
      if (elem === '...') {
        return <Button page={elem} key={`pug${index}`} btnClass="dots" disabled />;
      }
      return <Button page={elem} key={`pug${index}`} btnClass="button" disabled={false} />;
    });
  };

  return (
    <section className={pagination.boardContainer}>
      {assemble(totalPages, currentPage)}
    </section>
  );
}

PaginationBoard.propTypes = {
  boardSideLength: PropTypes.number,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
};

PaginationBoard.defaultProps = {
  boardSideLength: 3,
  totalPages: 0,
  currentPage: 0,
};
