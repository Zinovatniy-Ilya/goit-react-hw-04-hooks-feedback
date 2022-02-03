import './App.css';
import React, { useState } from 'react';
import FeedbackSection from './components/Feedback/FeedbackSection';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import StatisticsFeedback from './components/Feedback/FeedbackStatistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = ['good', 'neutral', 'bad'];

  const handleFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => good + neutral + bad;

  const positiveFeedbackPercentage = () =>
    Math.round((good / totalFeedback()) * 100);

  return (
    <FeedbackSection>
      <FeedbackOptions
        options={feedbackOptions}
        onLeaveFeedback={handleFeedback}
      />
      <StatisticsFeedback
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback()}
        positivePercentage={positiveFeedbackPercentage()}
      />
    </FeedbackSection>
  );
}
export default App;