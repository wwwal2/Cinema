import React from 'react';
import PropTypes from 'prop-types';
import { footer, content, link } from './Footer.scss';

export default function Footer(props) {
  const { created, email } = props;
  return (
    <footer className={footer}>
      <span className={content}>{created}</span>
      <span className={content}>
        <a
          className={link}
          href={`mailto:${email}?subject=Mail to me`}
        >
          Send me an email
        </a>
      </span>
    </footer>
  );
}

Footer.propTypes = {
  created: PropTypes.string,
  email: PropTypes.string,
};

Footer.defaultProps = {
  created: '2020',
  email: 'oleksiis@default-value.com',
};
