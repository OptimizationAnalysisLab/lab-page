import React, { Component } from "react";

export class Item extends Component {
  renderAuthors = authors => {
    const highlight = { fontWeight: "bold", textDecoration: "underline" };
    return (
      <div className="authors">
        {authors.map(a => {
          return (
            <div
              className="author"
              key={a}
              style={a === "I. –W. Lai" ? highlight : {}}
            >
              {a},
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { title, authors, info, time } = this.props.data;
    return (
      <div className="item">
        <div className="sub_title">{title}</div>
        {authors && this.renderAuthors(authors)}
        {info && <div className="info">{info}</div>}
        {time && <div className="time">{time}</div>}
      </div>
    );
  }
}

export default Item;
