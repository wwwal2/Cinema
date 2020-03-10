import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

import main from './Main.scss';

export default function Payload(props) {
  const { items } = props;
  const payload = items.map((item) => <Card key={item.id} item={item} />);

  return (
    <main className={main.pageBody}>
      {payload}
    </main>
  );
}

Payload.propTypes = {
  items: PropTypes.array,
};

Payload.defaultProps = {
  items: [],
};
