import React from 'react';
import PropTypes from 'prop-types';
import footer from './Footer.scss';

export default function Footer(props) {
  const { created, email } = props;
  const mailto = `mailto:${email}?subject=Mail to me`;

  return (
    <footer className={footer.footer}>
      <span className={footer.content}>{created}</span>
      <span className={footer.content}>
        <a
          className={footer.link}
          href={mailto}
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
