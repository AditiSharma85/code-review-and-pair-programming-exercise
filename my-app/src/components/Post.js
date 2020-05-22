import React from "react";
import '../image.jpg';

const regex = RegExp('[.]jpg$');

const Post = props => {
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