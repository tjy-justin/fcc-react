import React from "react";
import ReactDom from "react-dom";

import "./index.css";

// setup vars

const title = "Code Red";
const author = "Kyle Mills";
const img =
	"https://storage.googleapis.com/du-prd/books/images/9781982164997.jpg";

function BookList() {
	return (
		<section className="booklist">
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<h4>{author.toUpperCase()}</h4>
		</article>
	);
};

// uses parentheses over curly braces if no return statement included.

// const Image = () => (
// 	<img
// 		src="https://storage.googleapis.com/du-prd/books/images/9781982164997.jpg"
// 		alt=""
// 	/>
// );

// const Greeting = () => {
// 	return React.createElement(
// 		"div",
// 		{},
// 		React.createElement("h1", {}, "hello world")
// 	);
// };

ReactDom.render(<BookList />, document.getElementById("root"));
