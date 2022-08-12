import React from 'react';
import PropTypes from 'prop-types';
import { StatElem, StatValue } from './Stat.styled';
import {
  BsFillEmojiSmileFill,
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
} from 'react-icons/bs';

export const Statistic = ({ options, total, positivePercentage }) => {
  return (
    <>
      <StatElem>
        <BsFillEmojiSmileFill
          className="stat-icon"
          size="25px"
          color="rgba(0, 200, 27, 0.8)"
        />
        Good: <StatValue>{options.good}</StatValue>
      </StatElem>
      <StatElem>
        <BsFillEmojiNeutralFill
          className="stat-icon"
          size="25px"
          color="rgba(137, 135, 135, 0.8)"
        />
        Neutral: <StatValue>{options.neutral}</StatValue>
      </StatElem>
      <StatElem>
        <BsFillEmojiFrownFill
          className="stat-icon"
          size="25px"
          color="rgba(200, 0, 0, 0.8)"
        />
        Bad: <StatValue> {options.bad}</StatValue>
      </StatElem>
      <StatElem>
        Total: <StatValue> {total}</StatValue>
      </StatElem>
      <StatElem>
        {positivePercentage >= 50 ? (
          <BsFillEmojiSmileFill
            className="stat-icon"
            size="25px"
            color="rgba(0, 200, 27, 0.8)"
          />
        ) : (
          <BsFillEmojiFrownFill
            className="stat-icon"
            size="25px"
            color="rgba(200, 0, 0, 0.8)"
          />
        )}
        Positiv feedback: <StatValue>{positivePercentage}%</StatValue>
      </StatElem>
    </>
  );
};

Statistic.prototype = {
  options: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
