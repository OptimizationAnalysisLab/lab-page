import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
	render() {
		const headerList = ["Home", "About", "Publication", "Courses"];
		return (
			<header>
				<Link to="/">I Wei Lai</Link>
				<div className="link-wrap">
					{headerList.map((item, index) => {
						return (
							<Link to={item === "Home" ? "/" : item} key={index}>
								{item}
							</Link>
						);
					})}
				</div>
			</header>
		);
	}
}

export default Header;
