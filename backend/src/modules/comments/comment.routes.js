import { Router } from 'express';
import * as commentController from './comment.controller.js';
import { optionalAuth } from '../../middleware/auth.middleware.js';

const router = Router({ mergeParams: true });

router.get('/', commentController.getComments);

router.post('/', optionalAuth, commentController.postComment);

export default router;
