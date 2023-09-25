import React from "react";
import ReactDom from "react-dom";

function BookList() {
	return (
		<section>
			<Book />
			<Book />
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article>
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

const Author = () => <h1>Kyle Mills</h1>;

// const Greeting = () => {
// 	return React.createElement(
// 		"div",
// 		{},
// 		React.createElement("h1", {}, "hello world")
// 	);
// };

ReactDom.render(<BookList />, document.getElementById("root"));
