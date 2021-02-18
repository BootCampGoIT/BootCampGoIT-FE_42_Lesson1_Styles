import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

const courses = [
  { name: "React", id: "1213sdffdsfds34", modules: {count: 4, info: "fdghj"} },
  { name: "Html", id: "dsffsdsdffsd", modules: {count: 7, info: "fdghj"}  },
  { name: "Java Script", id: "121sdffdsfds34" },
];

ReactDOM.render(<App courses={courses}/>, document.getElementById("root"));
