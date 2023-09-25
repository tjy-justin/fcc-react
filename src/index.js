import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function BookList() {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article className="book">
			<Image />
			<Title />
			<Author />
		</article>
	);
};

// uses parentheses over curly braces if no return statement included.

const Image = () => (
	<img
		src="https://storage.googleapis.com/du-prd/books/images/9781982164997.jpg"
		alt=""
	/>
);

const Title = () => <h1>Code Red</h1>;

const Author = () => (
	<h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
		Kyle Mills
	</h4>
);

// const Greeting = () => {
// 	return React.createElement(
// 		"div",
// 		{},
// 		React.createElement("h1", {}, "hello world")
// 	);
// };

ReactDom.render(<BookList />, document.getElementById("root"));
