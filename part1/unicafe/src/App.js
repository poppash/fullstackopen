import React, { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value, unit }) => (
  <tr>
    <td>{text}</td>
    <td>{value} {unit}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const clicks = () => good + neutral + bad;
  const score = () => 1 * good + 0 * neutral + -1 * bad;
  const average = () => score() / clicks();
  const positive = () => 100 * (good / clicks());

  const show = () => clicks() > 0;

  if (show()) {
    return (
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={clicks()} />
          <Statistic text="average" value={average()} />
          <Statistic text="positive" value={positive()} unit="%" />
        </tbody>
      </table>
    );
  } else {
    return <div>No feedback given</div>;
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
