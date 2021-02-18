import React from "react";
import styles from "./Courses.module.css";

import styled from "styled-components";

const MySpan = styled.span`
  color: blueviolet;
  font-weight: 800;
`;
// console.log("styles :>> ", styles);

const { red, blue, mix } = styles;

const defaultStyle = {
  color: "black",
};
const customStyle = {
  color: "red",
};

// const getStyles = () => {
//     return [styles.red, styles.fontSizer].join(" ")
// }

const CourseListItem = ({ id, name, modules = { count: 0 } }) => {
  return (
    <li className={`${red} listItem`}>
      <MySpan>Name: {name}</MySpan>
      <span className={mix}>ModulesCount: {modules.count}</span>
      <button
        id={id}
        type='button'
        style={modules.count ? defaultStyle : customStyle}>
        Delete
      </button>
    </li>
  );
};

// CourseListItem.propTypes = {

// }

export default CourseListItem;
