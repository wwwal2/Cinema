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

  componentDidMount() {
    document.addEventListener('click', this.outsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.outsideClick, false);
  }

  outsideClick = (event) => {
    if (this.node.contains(event.target)) {
      return;
    }
    this.setState({
      hide: true,
    });
  }

  toggle = (info) => {
    const { settings, hide } = this.state;
    this.setState({
      hide: info === settings || hide ? !hide : hide,
      settings: info,
    });
  }

  btnClassName = (btnName) => {
    const { settings, hide } = this.state;
    return settings === btnName && !hide
      ? settingsStyles.activeButton
      : settingsStyles.settingsBtn;
  }

  getDropdown = () => {
    const { settings } = this.state;
    return settings === filters ? <FilterPayload /> : <OptionsPayload />;
  }

  render() {
    const { hide } = this.state;

    return (
      <section
        className={settingsStyles.container}
        ref={(node) => { this.node = node; }}
        onClick={this.outsideClick}
      >
        <button
          type="button"
          className={this.btnClassName(filters)}
          onClick={() => this.toggle(filters)}
        >
          {filters}
        </button>
        <button
          type="button"
          className={this.btnClassName(options)}
          onClick={() => this.toggle(options)}
        >
          {options}
        </button>
        <section
          className={settingsStyles[`hide-${hide}`]}
        >
          {this.getDropdown()}
        </section>
      </section>
    );
  }
}
