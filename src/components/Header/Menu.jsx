import React from 'react';
import { connect } from 'react-redux';
import header from './Header.scss';
import Tab from './Tab';

import { tabNames } from '../../constants/app';

function Menu() {
  const payload = tabNames.map((name) => <Tab tabName={name} key={name} />);

  return (
    <menu className={header.menuContainer}>
      {payload}
    </menu>
  );
}

const mapStateToProps = (state) => (
  {
    page: state.status.uiPage,
    cardsNum: state.cardsNum,
  }
);

export default connect(mapStateToProps, null)(Menu);
