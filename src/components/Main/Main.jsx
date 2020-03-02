import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import makePayload from './helpers/makePayload';
import { decodePath, calculatePath } from '../../utils';

import Request from './helpers/Request';
import {
  addResults,
  addAllGenres,
  showDetails,
  addUrlData,
} from '../../redux/actions';

import Payload from './Payload';
import Details from '../Details';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      details: {},
    };
    this.request = new Request();
  }

  async componentDidMount() {
    const {
      addAllGenres,
      addResults,
      addUrlData,
      location: { search },
    } = this.props;

    const genres = await this.request.getGenres();
    addAllGenres(genres.genres);
    addUrlData(decodePath(search));

    const { allProps } = this.props;

    const payload = await makePayload(allProps);
    addResults(payload.totalResults);
    this.updateState('items', payload.items);
  }

  async componentDidUpdate(prevProps) {
    const {
      allProps,
      updateCounter,
      detailsId,
      addResults,
      showDetails,
      briefStatus,
      history,
    } = this.props;

    if (prevProps.updateCounter !== updateCounter) {
      const payload = await makePayload(allProps);
      addResults(payload.totalResults);
      this.updateState('items', payload.items);
      history.push(calculatePath(briefStatus));
    }

    if (prevProps.detailsId !== detailsId) {
      const details = await this.request.getDetails(detailsId);
      this.updateState('details', details);
      showDetails(true);
    }
  }

  updateState = (stateName, items) => {
    this.setState({
      [stateName]: items,
    });
  }

  render() {
    const { detailsTab } = this.props;
    const { items, details } = this.state;
    return (
      details.id && detailsTab
        ? <Details item={details} />
        : <Payload items={items} />
    );
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
  addResults: PropTypes.func,
  showDetails: PropTypes.func,
  detailsTab: PropTypes.bool,
  addUrlData: PropTypes.func,
};

Main.defaultProps = {
  history: {},
  location: {},
  briefStatus: {},
  detailsTab: false,
  allProps: {},
  updateCounter: 0,
  detailsId: 0,
  addResults: () => { },
  addAllGenres: () => { },
  showDetails: () => { },
  addUrlData: () => { },
};

const mapStateToProps = (state) => (
  {
    allProps: state,
    detailsTab: state.status.detailsTab,
    detailsId: state.detailsId,
    updateCounter: state.status.updateCounter,
    briefStatus: {
      section: state.status.section,
      page: state.status.uiPage,
      cardsNum: state.cardsNum[state.status.section],
      year: state.movie.year,
      genre: state.movie.genre,
      rating: state.movie.rating,
      query: state.searchQuery,
    },
  }
);

export default connect(mapStateToProps, {
  addResults,
  addAllGenres,
  showDetails,
  addUrlData,
})(Main);
