import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.scss';

export default function Footer(props) {
  const { created, email } = props;
  return (
    <footer className={styles.footer}>
      <span className={styles.content}>{created}</span>
      <span className={styles.content}>
        <a
          className={styles.link}
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
