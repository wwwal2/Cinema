import React from 'react';
import PropTypes from 'prop-types';

import header from './Header.scss';
import logo from '../../../images/logo.png';

import Menu from './Menu';
import Settings from '../Settings';
import Search from '../Search';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { routes } = this.props;
    return (
      <header className={header.container}>
        <img alt="logo" src={logo} className={header.logo} />
        <Menu routes={routes} />
        <Settings />
        <Search />
      </header>
    );
  }
}

Header.propTypes = {
  routes: PropTypes.object,
};

Header.defaultProps = {
  routes: {
    main: '/',
  },
};
