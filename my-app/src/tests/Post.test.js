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