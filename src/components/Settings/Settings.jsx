import React from 'react';
import { filters, options } from '../../constants/app';
import settingsStyles from './Settings.scss';

import FilterPayload from './Filters';
import OptionsPayload from './Options';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: filters,
      hide: true,
    };
  }

  // static getDerivedStateFromProps() {
  //   document.addEventListener('click', this.outsideClick, false);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('click', this.outsideClick, false);
  // }

  outsideClick = (event) => {
    if (this.node.contains(event.target)) {
      return;
    }
    console.log('hello:');
  }

  toggle = (info) => {
    const { settings, hide } = this.state;
    this.setState({
      hide: info === settings || hide ? !hide : hide,
      settings: info,
    });
  }

  render() {
    const { settings, hide } = this.state;

    return (
      <section className={settingsStyles.container}>
        <button
          type="button"
          className={
            settings === filters && !hide
              ? settingsStyles.activeButton
              : settingsStyles.settingsBtn
          }
          onClick={() => this.toggle(filters)}
        >
          {filters}
        </button>
        <button
          type="button"
          className={
            settings === options && !hide
              ? settingsStyles.activeButton
              : settingsStyles.settingsBtn
          }
          onClick={() => this.toggle(options)}
        >
          {options}
        </button>
        <section
          ref={(node) => { this.node = node; }}
          className={settingsStyles[`hide-${hide}`]}
          onClick={this.outsideClick}
        >
          {
            settings === filters
              ? <FilterPayload />
              : <OptionsPayload />
          }
        </section>
      </section>
    );
  }
}
