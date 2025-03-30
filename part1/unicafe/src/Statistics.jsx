import React from "react";
import StatisticLine from "./StatisticLine.jsx";

const Statistics = ({ good, bad, neutral }) => {
  let total = good + neutral + bad;
  return (
    <table>
      <tbody>
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={total} />
        <StatisticLine
          text={"average"}
          value={(good * 1 + neutral * 0 + bad * -1) / total}
        />
        {/*can write good instead of good * 1 and remove neutral*/}
        <StatisticLine text={"positive"} value={`${(good * 100) / total}%`} />
      </tbody>
    </table>
  );
};

export default Statistics;
