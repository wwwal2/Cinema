import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

import main from './Main.scss';

export default function Payload(props) {
  const { items } = props;
  return (
    <main className={main.pageBody}>
      {items.map((item) => {
        return (
          <Card key={item.id} item={item} />
        );
      })}
    </main>
  );
}

Payload.propTypes = {
  items: PropTypes.array,
};

Payload.defaultProps = {
  items: [],
};
