import React from "react";

const Statistics = ({ good, bad, neutral }) => {
  let total = good + neutral + bad;
  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>
        average {(good * 1 + neutral * 0 + bad * -1) / total}
        {/*can write good instead of good * 1 and remove neutral*/}
      </p>
      <p>positive {(good * 100) / total}%</p>
    </>
  );
};

export default Statistics;
