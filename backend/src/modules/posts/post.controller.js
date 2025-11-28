import * as postService from './post.service.js';

export async function getPost(req, res, next) {
	try {
		const postId = +req.params.postId;
		const post = await postService.getPost(postId);
		res.json({ post });
	} catch (error) {
		next(error);
	}
}

export async function getPosts(req, res, next) {
	try {
		const posts = await postService.getPosts();
		res.json({ posts });
	} catch (error) {
		next(error);
	}
}

export async function createPost(req, res, next) {
	try {
		const { title, content } = req.body;
		const authorId = req.user.id;
		const post = await postService.createPost(title, content, authorId);
		res.json({ post });
	} catch (error) {
		next(error);
	}
}

export async function deletePost(req, res, next) {
	try {
		const postId = +req.params.postId;
		const result = await postService.deletePost(postId);
		res.json({ result });
	} catch (error) {
		next(error);
	}
}
