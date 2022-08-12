import { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Statistic } from '../Statistic/Statistic';
import { Section } from 'components/Section/Section';
import { ContextContainer } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stateValue = { good, neutral, bad };

  const heandlFeedback = stateValue => {
    switch (stateValue) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('Invalid subscription state type');
    }
  };

  const countTotal = (a, b, c) => a + b + c;

  const total = countTotal(good, neutral, bad);
  const positivePercentage = Math.round(100 * (good / total)) + '%';

  return (
    <>
      <ContextContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions options={stateValue} onClick={heandlFeedback} />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistic
              options={stateValue}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </ContextContainer>
    </>
  );
};
