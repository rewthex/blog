import { prisma } from '../../lib/prisma.js';

export async function postComment(postId, name, content) {
  console.log(postId, name, content)
  const comment = await prisma.comment.create({
    data: {
      postId,
      name,
      content
    }
  })
  return comment;
}