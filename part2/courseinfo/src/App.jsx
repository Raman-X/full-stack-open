import Course from "./components/Course.jsx";
const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
        },
        {
          name: "State of a component",
          exercises: 14,
        },
        {
          name: "Redux",
          exercises: 11,
        },
      ],
    },
    {
      name: "Node.js",
      parts: [
        {
          name: "Routing",
          exercises: 3,
        },
        {
          name: "Middlewares",
          exercises: 7,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map((course, index) => (
        <Course course={course} key={index} />
      ))}
    </div>
  );
};

export default App;
