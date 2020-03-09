import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import missingPage from '../../images/cropped.gif';
import { addStatusData } from '../../redux/actions';
import { statusData } from '../../constants/app';
import pageNotFound from './PageNotFound.scss';

function PageNotFound(props) {
  const { addStatusData } = props;
  addStatusData(statusData.section, 'Page not found');
  return (
    <section className={pageNotFound.container}>
      <img alt="missing page image" src={missingPage} className={pageNotFound.image} />
    </section>
  );
}

PageNotFound.propTypes = {
  addStatusData: PropTypes.func,
};

PageNotFound.defaultProps = {
  addStatusData: () => { },
};

export default connect(null, { addStatusData })(PageNotFound);
