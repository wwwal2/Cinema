import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  addQuery,
  update,
  addStatusData,
} from '../../redux/actions';

import { sections, statusData } from '../../constants/app';
import search from './SearchBlock.scss';

function Search(props) {
  const [searchInput, setSearchInput] = useState('');
  const {
    placeHolder,
    addQuery,
    update,
    addStatusData,
  } = props;

  const history = useHistory();
  const userInput = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const submit = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      addQuery(encodeURIComponent(searchInput.trim()));
      addStatusData(statusData.uiPage, 1);
      addStatusData(statusData.section, sections.search);
      addStatusData(statusData.detailsTab, false);
      update();
      history.push('/');
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
  update: PropTypes.func,
  addStatusData: PropTypes.func,
};

Search.defaultProps = {
  placeHolder: 'Search',
  addQuery: () => { },
  update: () => { },
  addStatusData: () => { },
};

export default connect(null, { addQuery, update, addStatusData })(Search);
