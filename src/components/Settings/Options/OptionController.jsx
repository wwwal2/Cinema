import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { checkLimit } from '../../Utils';

import options from './OptionsPayload.scss';
import { changePayloadNum } from '../../../redux/actions';

import {
  maxCardsNum,
  minCardsNum,
  changeStep,
} from '../../../constants';

function OptionsController(props) {
  const {
    label,
    target,
    allControllers,
    changePayloadNum,
  } = props;

  return (
    <section className={options.container}>
      <label className={options.label}>{label}</label>
      <div className={options.blockContainer}>
        <i
          className={checkLimit(allControllers[target], minCardsNum, 'left')}
          onClick={
            () => changePayloadNum(-changeStep, target, allControllers[target] - minCardsNum)
          }
        />
        <div className={options.value}>
          {allControllers[target]}
        </div>
        <i
          className={checkLimit(allControllers[target], maxCardsNum, 'right')}
          onClick={
            () => changePayloadNum(changeStep, target, maxCardsNum - allControllers[target])
          }
        />
      </div>
    </section>
  );
}

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
