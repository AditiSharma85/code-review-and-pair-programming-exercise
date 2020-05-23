import React from "react";
import Post from "../components/Post";
import LikeButton from "../components/LikeButton";
import { render,screen,fireEvent } from "@testing-library/react";
import { getByText,createEvent } from "@testing-library/dom";

// Testing for Post component. 
// Post with some content is rendered and then, using getByText, 
// the String is searched on react testing library screen.
test("Post component receives props and renders text", () => {

	render(
		<Post content = "Give me all your likes!" />
	);

	expect.stringContaining("Give me all your likes!");	
});
//Post is rendered, alongwith LikeButton.
//LikeButton is then clicked, and string containing 
//increased like count is expected.
test("Like component is clicked, and counter is increased", () => {

	render(
		<Post content = "This is totally not a cry for attention" />
		);

	const button = screen.getByText('Like');

	fireEvent.click(button);

	expect.stringContaining("Likes: 1");
});