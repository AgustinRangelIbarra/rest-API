const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// get back all the posts
router.get("/", async (request, response) => {
	try {
		const posts = await Post.find();
		response.json(posts);
	} catch (error) {
		response.json({ message: error});
	}
});


// submit a post
router.post('/', async (request, response) => {
	const post = new Post({
		title: request.body.title,
		description: request.body.description
	});
	console.log(post);

	try {
		const savedPost = await post.save();
		response.json(savedPost);
	} catch (error) {
		response.json({ message: error});
	}
});


// GET specific post
router.get("/:postId", async (request, response) => {
	try {
		const post = await Post.findById(request.params.postId);
		response.json(post);
	} catch (error) {
		response.json({ message: error});
	}
});


// DELETE a specific post
router.delete('/:postId', async (request, response) => {
	try {
		const removedPost = await Post.remove({ _id: request.params.postId });
		response.json(removedPost);
	} catch (error) {
		response.json({ message: error });
	}
});


// UPDATE a post
router.patch("/:postId", async (request, response) => {
	try {
		const updatedPost = await Post.updateOne(
			{ _id: request.params.postId }, 
			{ $set: {	title: request.body.title,
								description: request.body.description
							}
			}
		);
		response.json(updatedPost);
	} catch (error) {
		response.json({ message: error });
	}
});


module.exports = router; 