import React from 'react';
import contentMissing from './ContentIsMissing.scss';

export default function ContentIsMissing() {
  return (
    <main className={contentMissing.container}>
      <h1 className={contentMissing.label}>NO CONTENT AVAILABLE</h1>
    </main>
  );
}
