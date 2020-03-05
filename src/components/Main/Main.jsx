import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import initRequest from './helpers/initRequest';
import { decodePath, calculatePath } from '../../utils';
import { statusData } from '../../constants/app';

import Request from './helpers/Request';
import {
  addStatusData,
  addAllGenres,
  addUrlData,
} from '../../redux/actions';

import Payload from './Payload';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.request = new Request();
  }

  async componentDidMount() {
    const {
      addAllGenres,
      addUrlData,
      addStatusData,
      location: { search },
    } = this.props;

    const genres = await this.request.getGenres();
    addAllGenres(genres.genres);
    addUrlData(decodePath(search));
    const { allProps } = this.props;
    const payload = await initRequest(allProps);
    addStatusData(statusData.totalResults, payload.totalResults);
    this.updateState('items', payload.items);
  }

  async componentDidUpdate(prevProps) {
    const {
      allProps,
      updateCounter,
      detailsId,
      addStatusData,
      briefStatus,
      history,
    } = this.props;

    if (prevProps.updateCounter !== updateCounter) {
      const payload = await initRequest(allProps);
      addStatusData(statusData.totalResults, payload.totalResults);
      this.updateState('items', payload.items);
      history.push(calculatePath(briefStatus));
    }

    if (prevProps.detailsId !== detailsId) {
      const details = await this.request.getDetails(detailsId);
      this.updateState('details', details);
      addStatusData(statusData.detailsTab, true);
    }
  }

  updateState = (stateName, items) => {
    this.setState({
      [stateName]: items,
    });
  }

  static whyDidYouRender = true;

  render() {
    const { items } = this.state;
    return (<Payload items={items} />);
  }
}

Main.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  briefStatus: PropTypes.object,
  allProps: PropTypes.object,
  updateCounter: PropTypes.number,
  detailsId: PropTypes.number,
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
  detailsId: 0,
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
