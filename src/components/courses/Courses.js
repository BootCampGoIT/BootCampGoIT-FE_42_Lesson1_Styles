import PropTypes from "prop-types";

import React from "react";
import CourseListItem from "./coursesLIstItem/CourseListItem";

const listStyle = {  padding: 10, marginLeft: 130 };


const Courses = ({ courses, object = {} }) => {
  return (
    <ul className='list' style={listStyle} >
      {courses.map((course) => {
        const { id } = course;
        return <CourseListItem key={id} {...course} />;
      })}
    </ul>
  );
};
console.dir(Courses);

Courses.defaultProps = {
  courses: [],
};

Courses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object),
  object: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number,
    getData: PropTypes.func,
  }),
};

export default Courses;
