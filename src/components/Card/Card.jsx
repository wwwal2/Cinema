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
import { textLength, statusData, sections } from '../../constants/app';


function Card(props) {
  const {
    section,
    item,
    favoriteIds,
    addDetailsId,
    addStatusData,
    update,
    addFavorite,
  } = props;

  const [favorite, setFavorite] = useState(checkFavorite(favoriteIds, item.id));
  const [notification, setNotification] = useState(card.notification);

  const history = useHistory();

  const toggleFavorite = (e) => {
    e.stopPropagation();
    addFavorite(item);
    setFavorite(!favorite);
    if (!favorite) {
      setNotification(card.show);
      setTimeout(() => setNotification(card.notification), 1000);
    }
    if (section === sections.favorite) {
      update();
    }
  };
  const imagePath = () => {
    return item.poster_path
      ? `https://image.tmdb.org/t/p/w185/${item.poster_path}`
      : noPoster;
  };

  const cardClick = () => {
    addDetailsId(item.id);
    addStatusData(statusData.detailsTab, true);
    history.push(`/details/${item.id}`);
  };

  const favoriteImg = (favorite && favoriteOn) || favoriteOff;
  const titleAndDate = `${item.title} (${item.release_date ? item.release_date.substr(0, 4) : 'coming soon'})`;
  const rate = `Rate ${item.vote_average}`;
  const overview = item.overview.length > textLength
    ? `${item.overview.substr(0, textLength)}...`
    : item.overview;

  return (
    <section
      className={card.card}
      onClick={cardClick}
    >
      <div className={card.favoriteContainer}>
        <div className={notification}>Added to favorite</div>
        <img
          role="button"
          alt="favorite"
          src={favoriteImg}
          className={card.favoriteImg}
          onClick={toggleFavorite}
        />
      </div>
      <h3 className={card.label}>
        {titleAndDate}
      </h3>
      <img
        className={card.poster}
        alt="movie poster"
        src={imagePath()}
      />
      <p className={card.description}>
        {overview}
      </p>
      <p className={card.rate}>
        {rate}
      </p>
    </section>
  );
}

Card.propTypes = {
  section: PropTypes.string,
  item: PropTypes.object,
  favoriteIds: PropTypes.array,
  addStatusData: PropTypes.func,
  update: PropTypes.func,
  addFavorite: PropTypes.func,
  addDetailsId: PropTypes.func,
};

Card.defaultProps = {
  section: '',
  item: { title: 'empty' },
  favoriteIds: [],
  addStatusData: () => { },
  addFavorite: () => { },
  addDetailsId: () => { },
  update: () => { },
};

const mapStateToProps = (state) => (
  {
    favoriteIds: state.favorite.favoriteIds,
    section: state.status.section,
  }
);

export default connect(mapStateToProps, {
  addFavorite,
  addDetailsId,
  addStatusData,
  update,
})(Card);
