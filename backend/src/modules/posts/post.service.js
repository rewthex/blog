import { prisma } from '../../lib/prisma.js';

export async function getPost(postId) {
	const post = await prisma.post.findUnique({ where: { id: postId } });
	return post;
}

export async function getPosts() {
	const posts = await prisma.post.findMany();
	return posts;
}

export async function createPost(title, content, authorId) {
	const post = await prisma.post.create({
		data: {
			title,
			content,
			authorId,
		},
	});
	return post;
}

export async function deletePost(postId) {
	const result = await prisma.post.delete({ where: { id: postId } });
	return result;
}
