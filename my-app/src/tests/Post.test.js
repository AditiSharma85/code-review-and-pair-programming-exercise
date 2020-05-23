import React from "react";
import Post from "../components/Post";
import { render,screen } from "@testing-library/react";
import { getByText } from "@testing-library/dom";

//Testing for Post component. Post with some content is rendered and then, using getByText, the String is searched on react testing library screen.
test("Post component receives props and renders text", () => {

	render(
		<Post content = "Give me all your likes!" />
	);

	const testResult = screen.getByText("Give me all your likes!");	
});