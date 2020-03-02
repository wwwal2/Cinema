import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import header from './Header.scss';
import Tab from './Tab';

function Menu(props) {
  const { tabNames } = props;
  return (
    <menu className={header.menuContainer}>
      {
        tabNames.map(
          (tabName) => {
            return (
              <Tab
                tabName={tabName}
                key={tabName}
              />
            );
          },
        )
      }
    </menu>
  );
}

Menu.propTypes = {
  tabNames: PropTypes.array,
};

Menu.defaultProps = {
  tabNames: [
    'Main',
    'Popular',
    'Favorite',
  ],
};

const mapStateToProps = (state) => (
  {
    page: state.status.uiPage,
    cardsNum: state.cardsNum,
  }
);

export default connect(mapStateToProps, null)(Menu);
