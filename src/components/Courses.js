import React, { Component } from "react";
import Item from "./Item";
import { courses } from "../data";

export class Courses extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="title">Teaching Experience</div>
        <div className="list">
          {courses.map((c, index) => {
            return <Item data={c} key={index} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Courses;
