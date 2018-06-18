import React, { Component } from "react";
import Item from "./Item";
import { publication } from "../data";
export class Publication extends Component {
  render() {
    const {
      Books,
      Ph_D_Thesis,
      Journal_Papers,
      Conference_Papers
    } = publication;

    return (
      <React.Fragment>
        <div className="title">Publication</div>
        <div className="title_list">Books</div>
        <div className="list">
          {Books.map((b, index) => {
            return <Item data={b} key={index} />;
          })}
        </div>
        <div className="title_list">Ph.D Thesis</div>
        <div className="list">
          {Ph_D_Thesis.map((t, index) => {
            return <Item data={t} key={index} />;
          })}
        </div>
        <div className="title_list">Journal Papers</div>
        <div className="list">
          {Journal_Papers.map((p, index) => {
            return <Item data={p} key={index} />;
          })}
        </div>
        <div className="title_list">Conference Papers</div>
        <div className="list">
          {Conference_Papers.map((p, index) => {
            return <Item data={p} key={index} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Publication;
