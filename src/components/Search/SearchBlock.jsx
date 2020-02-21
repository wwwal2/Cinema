import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  addQuery,
  defineSection,
  update,
  addUIPageNum,
  showDetails,
} from '../../redux/actions';

import { sections } from '../../constants';
import search from './SearchBlock.scss';

function Search(props) {
  const [searchInput, setSearchInput] = useState('');
  const {
    placeHolder,
    addQuery,
    defineSection,
    update,
    addUIPageNum,
    showDetails,
  } = props;

  const history = useHistory();

  const userInput = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const submit = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      addUIPageNum(1);
      addQuery(encodeURIComponent(searchInput.trim()));
      defineSection(sections.search);
      showDetails(false);
      update();
      setSearchInput('');
      history.push('/search/1');
    }
  };

  return (
    <section className={search.container}>
      <input
        value={searchInput}
        type="text"
        placeholder={placeHolder}
        className={search.input}
        onKeyPress={submit}
        onChange={userInput}
      />
      <button
        type="button"
        className={search.start}
        onClick={submit}
      >
        Start
      </button>
    </section>
  );
}

export default connect(null, {
  addQuery,
  defineSection,
  update,
  addUIPageNum,
  showDetails,
})(Search);

Search.propTypes = {
  placeHolder: PropTypes.string,
  addQuery: PropTypes.func,
  defineSection: PropTypes.func,
  showDetails: PropTypes.func,
  update: PropTypes.func,
  addUIPageNum: PropTypes.func,
};

Search.defaultProps = {
  placeHolder: 'Search movies',
  addQuery: () => { },
  defineSection: () => { },
  update: () => { },
  addUIPageNum: () => { },
  showDetails: () => { },
};
