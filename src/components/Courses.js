import React, { Component } from "react";
import { courses } from "../data";

export class Courses extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="title">Teaching Experience</div>
				<div className="list">
					{courses.map((c, index) => {
						return (
							<div className="item" key={index}>
								<div className="sub_title">{c.title}</div>
								<div className="time">
									{c.time} - {c.season}
								</div>
							</div>
						);
					})}
				</div>
			</React.Fragment>
		);
	}
}

export default Courses;
