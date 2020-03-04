import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import details from './Details.scss';
import favoriteOn from '../../images/starFilled.png';
import favoriteOff from '../../images/starEmpty.png';
import noPoster from '../../images/noPoster.png';

import { addFavorite, addDetailsId, addStatusData } from '../../redux/actions';
import { checkFavorite, makeRecitation } from '../../utils';
import { statusData } from '../../constants/app';


function Details(props) {
  const {
    item,
    favoriteIds,
    addFavorite,
    addStatusData,
  } = props;

  const [favorite, setFavorite] = useState(checkFavorite(favoriteIds, item.id));
  const [imagePath, setImagePath] = useState(`http://image.tmdb.org/t/p/w500/${item.poster_path}`);

  const toggleFavorite = () => {
    addFavorite(item);
    setFavorite(!favorite);
  };
  return (
    <section className={details.wrapper}>
      <div className={details.container}>
        <img
          className={details.poster}
          alt="no poster to this movie"
          src={imagePath}
          onClick={() => addStatusData(statusData.detailsTab, false)}
          onError={() => setImagePath(noPoster)}
        />
        <section className={details.informContainer}>
          <img
            alt="favorite"
            src={favorite ? favoriteOn : favoriteOff}
            className={details.favorite}
            onClick={toggleFavorite}
          />
          <h2>{item.title}</h2>
          <p className={details.shortText}>{`Release: ${item.release_date}`}</p>
          <p className={details.shortText}>
            <span>Production: </span>
            {makeRecitation(item.production_countries, 'name')}
          </p>
          <p className={details.shortText}>{`Budget: $${item.budget}`}</p>
          <p className={details.shortText}>{`Rating: ${item.vote_average} Votes: ${item.vote_count}`}</p>
          <p className={details.shortText}>{makeRecitation(item.genres, 'name')}</p>
          <article>
            <p>{item.overview}</p>
          </article>
        </section>
      </div>
      <button
        type="button"
        onClick={() => addStatusData(statusData.detailsTab, false)}
        className={details.backBtn}
      >
        BACK
      </button>
    </section>
  );
}

Details.propTypes = {
  item: PropTypes.object,
  favoriteIds: PropTypes.array,
  addFavorite: PropTypes.func,
  addStatusData: PropTypes.func,
};

Details.defaultProps = {
  item: { title: 'empty' },
  favoriteIds: [],
  addFavorite: () => { },
  addStatusData: () => { },
};

const mapStateToProps = (state) => ({ favoriteIds: state.favorite.favoriteIds });

export default connect(mapStateToProps, { addFavorite, addDetailsId, addStatusData })(Details);
