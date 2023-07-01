import React, { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [hasFeedback, setHasFeedback] = useState(false);

  const countFeedback = (event) => {
    const { name } = event.target;
    if (name === "good") {
      setGood((prevGood) => prevGood + 1);
    } else if (name === "neutral") {
      setNeutral((prevNeutral) => prevNeutral + 1);
    } else if (name === "bad") {
      setBad((prevBad) => prevBad + 1);
    }
    setHasFeedback(true);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={countFeedback}
        />
      </Section>

      <Section title="Statistics">
        {hasFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <p>No feedback given yet.</p>
        )}
      </Section>
    </>
  );
}

export default App;
