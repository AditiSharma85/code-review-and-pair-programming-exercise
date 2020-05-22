import React from "react";
import '../image.jpg';

const regex = RegExp('[.]jpg$');

const Post = props => {
	if (!regex.test(props.content)){
	return (
		<div className= "Post">
		<h2>{props.content}</h2>
		</div>
		);
} else{
	return (
		<div className = "Pic">
		<img src = {props.content} alt = 'something went wrong!' />
		</div> );
}
};

export default Post;