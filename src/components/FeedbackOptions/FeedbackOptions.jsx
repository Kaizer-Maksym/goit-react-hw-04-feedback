import React from 'react';
import {
  ButtonList,
  ButtonListItem,
  StatisticBtn,
} from '../FeedbackOptions/FeedbackOptions.styled';

import PropTypes from 'prop-types';

function first(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <>
      <ButtonList>
        {Object.keys(options).map((option, index) => {
          return (
            <ButtonListItem key={index}>
              <StatisticBtn type="button" onClick={() => onClick(option)}>
                {first(option)}
              </StatisticBtn>
            </ButtonListItem>
          );
        })}
      </ButtonList>
    </>
  );
};

FeedbackOptions.prototype = {
  onClick: PropTypes.func,
  options: PropTypes.object,
};
