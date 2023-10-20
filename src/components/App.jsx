import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = evt => {
    const arg = evt.target.innerHTML.toLowerCase();
    switch (arg) {
      case "good":
        setGood(prevState => prevState + 1);
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;
      case "bad":
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good * 100 / (good + neutral + bad));
  };

  return (
    <div>
      <h2>Please leave feedback</h2>
      <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleClick}></FeedbackOptions>

      <h2>Statistics</h2>
      {countTotalFeedback() === 0 && (
        <p>There is no feedback</p>
      )};
      {countTotalFeedback() !== 0 && (
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage}></Statistics>
      )};
    </div>
  );
};
