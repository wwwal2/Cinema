import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import details from './Details.scss';
import favoriteOn from '../../images/starFilled.png';
import favoriteOff from '../../images/starEmpty.png';
import noPoster from '../../images/noPoster.png';

import Request from '../Main/helpers/Request';
import { addFavorite, addDetailsId, addStatusData } from '../../redux/actions';
import { checkFavorite, makeRecitation } from '../../utils';
import { statusData } from '../../constants/app';


function Details(props) {
  const {
    favoriteIds,
    addFavorite,
    addStatusData,
    detailsId,
  } = props;

  const [data, setData] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [imagePath, setImagePath] = useState('');
  const request = new Request();
  const history = useHistory();

  const fetchData = async () => {
    const result = await request.getDetails(detailsId);
    setData(result);
    setImagePath(`http://image.tmdb.org/t/p/w500/${result.poster_path}`);
    setFavorite(checkFavorite(favoriteIds, result.id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleFavorite = () => {
    addFavorite(data);
    setFavorite(!favorite);
  };

  const goBack = () => {
    addStatusData(statusData.detailsTab, false);
    history.push('/');
  };

  return (
    <section className={details.wrapper}>
      {data
        && (
          <div className={details.container}>
            <img
              className={details.poster}
              alt="no poster to this movie"
              onClick={goBack}
              src={imagePath}
              onError={() => setImagePath(noPoster)}
            />
            <section className={details.informContainer}>
              <img
                alt="favorite"
                src={favorite ? favoriteOn : favoriteOff}
                className={details.favorite}
                onClick={toggleFavorite}
              />
              <h2>{data.title}</h2>
              <p className={details.shortText}>{`Release: ${data.release_date}`}</p>
              <p className={details.shortText}>
                <span>Production: </span>
                {makeRecitation(data.production_countries, 'name')}
              </p>
              <p className={details.shortText}>{`Budget: $${data.budget}`}</p>
              <p className={details.shortText}>{`Rating: ${data.vote_average} Votes: ${data.vote_count}`}</p>
              <p className={details.shortText}>{makeRecitation(data.genres, 'name')}</p>
              <article>
                <p>{data.overview}</p>
              </article>
            </section>
          </div>
        )}
      <button
        type="button"
        onClick={goBack}
        className={details.backBtn}
      >
        BACK
      </button>
    </section>
  );
}

Details.propTypes = {
  detailsId: PropTypes.number,
  favoriteIds: PropTypes.array,
  addFavorite: PropTypes.func,
  addStatusData: PropTypes.func,
};

Details.defaultProps = {
  detailsId: 0,
  favoriteIds: [],
  addFavorite: () => { },
  addStatusData: () => { },
};

const mapStateToProps = (state) => (
  {
    favoriteIds: state.favorite.favoriteIds,
    detailsId: state.detailsId,
  }
);

export default connect(mapStateToProps, { addFavorite, addDetailsId, addStatusData })(Details);
