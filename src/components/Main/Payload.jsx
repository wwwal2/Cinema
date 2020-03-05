import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import ContentMissing from '../ContentIsMissing';

import main from './Main.scss';

export default function Payload(props) {
  const { items } = props;
  console.log('items:', items);
  return (
    <main className={main.pageBody}>
      {items.map((item) => <Card key={item.id} item={item} />)}
      {!items[0] && <ContentMissing />}
    </main>
  );
}

Payload.propTypes = {
  items: PropTypes.array,
};

Payload.defaultProps = {
  items: [],
};
