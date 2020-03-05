import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import card from './Card.scss';
import favoriteOn from '../../images/starFilled.png';
import favoriteOff from '../../images/starEmpty3.png';
import noPoster from '../../images/noPoster.png';

import {
  addFavorite,
  addDetailsId,
  addStatusData,
  update,
} from '../../redux/actions';

import { checkFavorite } from '../../utils';
import { textLength } from '../../constants/app';


function Card(props) {
  const {
    section,
    item,
    favoriteIds,
    addDetailsId,
    // detailsId,
    // addStatusData,statusData
    update,
    addFavorite,
  } = props;

  const [favorite, setFavorite] = useState(checkFavorite(favoriteIds, item.id));
  const [imagePath, setImagePath] = useState(`http://image.tmdb.org/t/p/w185/${item.poster_path}`);
  const [notification, setNotification] = useState(card.notification);

  const history = useHistory();

  const toggleFavorite = () => {
    addFavorite(item);
    setFavorite(!favorite);
    if (!favorite) {
      setNotification(card.show);
      setTimeout(() => setNotification(card.notification), 1000);
    }
    if (section === 'favorite') {
      update();
    }
  };

  const iconClick = (id) => {
    addDetailsId(id);
    history.push('/details/');

    // if (id === detailsId) {
    //   addStatusData(statusData.detailsTab, true);
    // }
  };

  return (
    <div className={card.card}>
      <section className={card.favoriteContainer}>
        <div className={notification}>Added to favorite</div>
        <img
          role="button"
          alt="favorite"
          src={favorite ? favoriteOn : favoriteOff}
          className={card.favoriteImg}
          onClick={toggleFavorite}
        />
      </section>
      <h3 className={card.label}>
        {
          `${item.title} (${item.release_date ? item.release_date.substr(0, 4) : 'coming soon'})`
        }
      </h3>
      <img
        className={card.poster}
        alt="movie poster"
        src={imagePath}
        onError={() => setImagePath(noPoster)}
        onClick={() => iconClick(item.id)}
      />
      <p className={card.description}>
        {
          item.overview.length > textLength
            ? `${item.overview.substr(0, textLength)}...`
            : item.overview
        }
      </p>
      <p className={card.rate}>
        {`Rate ${item.vote_average}`}
      </p>
    </div>
  );
}

Card.propTypes = {
  section: PropTypes.string,
  item: PropTypes.object,
  favoriteIds: PropTypes.array,
  // detailsId: PropTypes.number,
  // addStatusData: PropTypes.func,
  update: PropTypes.func,
  addFavorite: PropTypes.func,
  addDetailsId: PropTypes.func,
};

Card.defaultProps = {
  section: '',
  item: { title: 'empty' },
  favoriteIds: [],
  // detailsId: 0,
  // addStatusData: () => { },
  addFavorite: () => { },
  addDetailsId: () => { },
  update: () => { },
};

const mapStateToProps = (state) => (
  {
    favoriteIds: state.favorite.favoriteIds,
    section: state.status.section,
    detailsId: state.detailsId,
  }
);

export default connect(mapStateToProps, {
  addFavorite,
  addDetailsId,
  addStatusData,
  update,
})(Card);
