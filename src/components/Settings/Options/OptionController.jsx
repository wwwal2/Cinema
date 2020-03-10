import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { defineClassName } from '../../../utils';

import options from './Options.scss';
import { changePayloadNum } from '../../../redux/actions';

import {
  maxCardsNum,
  minCardsNum,
  changeStep,
} from '../../../constants/app';

function OptionsController(props) {
  const {
    label,
    target,
    allControllers,
    changePayloadNum,
  } = props;

  const getLeftArrowClass = () => {
    return defineClassName(allControllers[target], minCardsNum, 'left');
  };

  const getRightArrowClass = () => {
    return defineClassName(allControllers[target], maxCardsNum, 'right');
  };

  const handleDecrement = () => {
    changePayloadNum(-changeStep, target, allControllers[target] - minCardsNum);
  };

  const handleIncrement = () => {
    changePayloadNum(changeStep, target, maxCardsNum - allControllers[target]);
  };

  return (
    <section className={options.container}>
      <label className={options.label}>{label}</label>
      <div className={options.blockContainer}>
        <i
          className={getLeftArrowClass()}
          onClick={handleDecrement}
        />
        <div className={options.value}>
          {allControllers[target]}
        </div>
        <i
          className={getRightArrowClass()}
          onClick={handleIncrement}
        />
      </div>
    </section>
  );
}

OptionsController.propTypes = {
  label: PropTypes.string,
  target: PropTypes.string,
  allControllers: PropTypes.object,
  changePayloadNum: PropTypes.func,
};

OptionsController.defaultProps = {
  label: 'Controller',
  target: '',
  allControllers: {},
  changePayloadNum: () => { },
};

const mapStateToProps = (state) => (
  {
    allControllers: {
      main: state.cardsNum.main,
      popular: state.cardsNum.popular,
      favorite: state.cardsNum.favorite,
    },
  }
);

export default connect(mapStateToProps, { changePayloadNum })(OptionsController);
