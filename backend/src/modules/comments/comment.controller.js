import * as commentService from './comment.service.js';

export async function getComments(req, res, next) {
	try {
		const { postId } = req.params;
	} catch (error) {}
}

export async function postComment(req, res, next) {
	try {
		const postId = Number(req.params.postId);
		const { content } = req.body;
		const name = req.user?.name || req.body.name || 'anonymous';
		console.log(name);
		const comment = await commentService.postComment(postId, name, content);
		res.json({ comment });
	} catch (error) {
		next(error);
	}
}
