import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import initRequest from './helpers/initRequest';
import { decodePath, calculatePath, combinePropsAndUrl } from '../../utils';
import { statusData } from '../../constants/app';

import Request from './helpers/Request';
import {
  addStatusData,
  addAllGenres,
  addUrlData,
} from '../../redux/actions';

import Payload from './Payload';
import ContentIsMissing from '../ContentIsMissing';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
    this.request = new Request();
  }

  async componentDidMount() {
    const {
      addAllGenres,
      addStatusData,
      addUrlData,
      location: { search },
      allProps,
    } = this.props;

    const urlProps = combinePropsAndUrl(allProps, decodePath(search));
    addUrlData(decodePath(search));

    this.request.getGenres()
      .then((res) => {
        addAllGenres(res.genres);
        return initRequest(urlProps, res.genres);
      })
      .then((res) => {
        addStatusData(statusData.totalResults, res.totalResults);
        this.setState({
          items: res.items,
          loading: false,
        });
      });
  }

  async componentDidUpdate(prevProps) {
    const {
      allProps,
      addStatusData,
      briefStatus,
      history,
      location: { search },
      updateCounter,
    } = this.props;

    if (prevProps.updateCounter !== updateCounter) {
      initRequest(allProps, null, decodePath(search))
        .then((res) => {
          addStatusData(statusData.totalResults, res.totalResults);
          this.setState({
            items: res.items,
            loading: false,
          });
          history.push(calculatePath(briefStatus));
        });
    }
  }

  updateState = (prop, value) => {
    this.setState({ [prop]: value });
  }


  render() {
    const { items, loading } = this.state;
    return (!items[0] && !loading) ? <ContentIsMissing /> : <Payload items={items} />;
  }
}

Main.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  briefStatus: PropTypes.object,
  allProps: PropTypes.object,
  updateCounter: PropTypes.number,
  addAllGenres: PropTypes.func,
  addUrlData: PropTypes.func,
  addStatusData: PropTypes.func,
};

Main.defaultProps = {
  history: {},
  location: {},
  briefStatus: {},
  allProps: {},
  updateCounter: 0,
  addAllGenres: () => { },
  addUrlData: () => { },
  addStatusData: () => { },
};

const mapStateToProps = (state) => (
  {
    allProps: state,
    detailsTab: state.status.detailsTab,
    detailsId: state.detailsId,
    updateCounter: state.status.updateCounter,
    briefStatus: {
      section: state.status.section,
      uiPage: state.uiPage,
      cardsNum: state.cardsNum[state.status.section],
      year: state.movie.year,
      genre: state.movie.genre,
      rating: state.movie.rating,
      query: state.searchQuery,
    },
  }
);

export default connect(mapStateToProps, {
  addAllGenres,
  addUrlData,
  addStatusData,
})(Main);
