import React from "react";
import '../image.jpg';

//regex for verifying if last four characters of props.content are '.jpg'.
const regex = RegExp('[.]jpg$');

const Post = props => {
//if regex condition is not verified, content will be displayed as string.
	if (!regex.test(props.content)){
	return (
		<div>
		<div className= "Post">
		<h2>{props.content}</h2>
		</div>
		<div>
		<br />
		<br />
		</div>
		</div>
		);
} else{
//if condition is verified, content will be displayed as an image
	return (
		<div>
		<div className = "Pic">
		<img src = {props.content} alt = 'something went wrong!' />
		</div>
		<div>
		<br />
		<br />
		</div>
		</div>);
}
};

export default Post;