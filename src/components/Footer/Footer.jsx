import React from 'react';
import PropTypes from 'prop-types';
import footer from './Footer.scss';

export default function Footer(props) {
  const { created, email } = props;
  return (
    <footer className={footer.footer}>
      <span className={footer.content}>{created}</span>
      <span className={footer.content}>{email}</span>
    </footer>
  );
}

Footer.propTypes = {
  created: PropTypes.string,
  email: PropTypes.string,
};

Footer.defaultProps = {
  created: 'Feb 2020',
  email: 'oleksiis@default-value.com',
};
