import React, { Component } from "react";
import { personalInfo } from "../data";

export class Homepage extends Component {
	render() {
		const {
			name_en,
			name_ch,
			Affiliation,
			TEL,
			FAX,
			Email,
			Research_Interest
		} = personalInfo;
		return (
			<div className="main">
				<div className="card">
					<div className="img-wrap" />
					<div className="info">
						<div className="name title">
							{name_en} ({name_ch})
						</div>
						<div className="affiliation">{Affiliation}</div>
						<div className="email">Email: {Email}</div>
						<div className="phone">
							<div className="tel">TEL: {TEL}</div>
							<div className="fax">FAX: {FAX}</div>
						</div>
						<div className="interest">
							Research Interest:
							{Research_Interest.map(item => {
								return <div key={item}>{item}</div>;
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;
