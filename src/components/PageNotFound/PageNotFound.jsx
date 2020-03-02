import React from 'react';
import missingPage from '../../../images/cropped.gif';
import styles from './PageNotFound.scss';

export default function Footer() {
  return (
    <section className={styles.container}>
      <img alt="missing page image" src={missingPage} className={styles.image} />
    </section>
  );
}
