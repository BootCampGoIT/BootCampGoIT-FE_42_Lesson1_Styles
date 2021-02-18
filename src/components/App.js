import React from "react";
import Courses from "./courses/Courses";

const object = {
  name: "alex",
  age: 30,
  getData() {
      return "Hello"
  },


};

// const getData = () => {
//   return "Hello";
// };

const App = ({ courses }) => {
  return (
    <div className='courses'>
      <Courses courses={courses} object={object} />
    </div>
  );
};

export default App;
