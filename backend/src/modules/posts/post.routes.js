import { Router } from 'express';
import * as postController from './post.controller.js';
import { requireAuth } from '../../middleware/auth.middleware.js';

const router = Router();

// Get a single post
// GET /posts/:postId
router.get('/:postId', postController.getPost);

// Get all posts
// GET /posts
router.get('/', postController.getPosts);

// Create a post
// POST /posts
router.post('/', requireAuth, postController.createPost);

// Delete a post
// DELETE /posts/:postId
router.delete('/:postId', requireAuth, postController.deletePost);

export default router;
