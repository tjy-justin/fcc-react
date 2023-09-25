import React, { createElement } from "react";
import ReactDom from "react-dom";

function Greeting() {
	return (
		<div className="">
			<Person />
			<Message />
		</div>
	);
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
	return <p>this my msg</p>;
};

// const Greeting = () => {
// 	return React.createElement(
// 		"div",
// 		{},
// 		React.createElement("h1", {}, "hello world")
// 	);
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
