import React from "react";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";

const Course = ({ course }) => {
  const total = course.parts.reduce((accumulator, part) => {
    return part.exercises + accumulator;
  }, 0);
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

export default Course;
