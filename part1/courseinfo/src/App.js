import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) =>
  props.parts.map((part, index) => (
    <p key={index}>
      {part.name} {part.exercises}
    </p>
  ));

const Total = (props) => (
  <p>
    Number of exercises {props.parts.map((part) => part.exercises).reduce((x, y) => x + y)}
  </p>
);

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const parts = [
    {
      name: part1,
      exercises: exercises1,
    },
    {
      name: part2,
      exercises: exercises2,
    },
    {
      name: part3,
      exercises: exercises3,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
