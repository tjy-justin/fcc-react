import React, { createElement } from "react";
import ReactDom from "react-dom";

function Greeting() {
	return (
		<div className="">
			<h3>hello world</h3>
			<ul>
				<li>
					<a href="#">hello world</a>
				</li>
				<img src="" alt="" />
				<input type="text" name="" id="" />
			</ul>
		</div>
	);
}

// const Greeting = () => {
// 	return React.createElement(
// 		"div",
// 		{},
// 		React.createElement("h1", {}, "hello world")
// 	);
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
