import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  addQuery,
  defineSection,
  update,
  addUiPageNum,
  showDetails,
} from '../../redux/actions';

import { sections } from '../../constants/other';
import search from './SearchBlock.scss';

function Search(props) {
  const [searchInput, setSearchInput] = useState('');
  const {
    placeHolder,
    addQuery,
    defineSection,
    update,
    addUiPageNum,
    showDetails,
  } = props;

  const userInput = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const submit = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      addUiPageNum(1);
      addQuery(encodeURIComponent(searchInput.trim()));
      defineSection(sections.search);
      showDetails(false);
      update();
      setSearchInput('');
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

Search.propTypes = {
  placeHolder: PropTypes.string,
  addQuery: PropTypes.func,
  defineSection: PropTypes.func,
  showDetails: PropTypes.func,
  update: PropTypes.func,
  addUiPageNum: PropTypes.func,
};

Search.defaultProps = {
  placeHolder: 'Search movies',
  addQuery: () => { },
  defineSection: () => { },
  update: () => { },
  addUiPageNum: () => { },
  showDetails: () => { },
};

export default connect(null, {
  addQuery,
  defineSection,
  update,
  addUiPageNum,
  showDetails,
})(Search);
