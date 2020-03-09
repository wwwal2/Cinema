import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './App.scss';
import { addUrlData } from './redux/actions';

import Header from './components/Header';
import Main from './components/Main';
import Details from './components/Details';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound';


import Pagination from './components/Pagination';

function App(props) {
  const { detailsTab } = props;
  return (
    <Router basename="/">
      <div className={detailsTab ? `${style.wrapper} ${style.details}` : style.wrapper}>
        <Header />
        <Pagination />
        <Switch>
          <Route exact path="/details/:id/" component={Details} />
          <Route exact path="/pageNotFound/" component={PageNotFound} />
          <Route exact path="/:query/" component={Main} />
          <Route exact path="/" component={Main} />
          <Route component={PageNotFound} />
        </Switch>
        <Pagination />
        <div className={style.buffer} />
      </div>
      <Footer />
    </Router>
  );
}

App.propTypes = {
  detailsTab: PropTypes.bool,
};

App.defaultProps = {
  detailsTab: false,
};

const mapStateToProps = (state) => (
  {
    detailsTab: state.status.detailsTab,
  }
);

export default connect(mapStateToProps, { addUrlData })(App);
