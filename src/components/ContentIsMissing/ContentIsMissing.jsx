import React from 'react';
import { container, label } from './ContentIsMissing.scss';

export default function ContentIsMissing() {
  return (
    <main className={container}>
      <h1 className={label}>NO CONTENT AVAILABLE</h1>
    </main>
  );
}
