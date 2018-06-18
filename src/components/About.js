import React, { Component } from "react";
import Item from "./Item";
import { introduction, education, awards, projects } from "../data";

export class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="title">About</div>
        <div className="title_list">Education</div>
        <div className="list">
          {education.map((e, index) => {
            return <Item data={e} key={index} />;
          })}
        </div>
        <div className="title_list">Awards</div>
        <div className="list">
          {awards.map((a, index) => {
            return <Item data={a} key={index} />;
          })}
        </div>
        <div className="title_list">Projects</div>
        <div className="list">
          {projects.map((p, index) => {
            return <Item data={p} key={index} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
