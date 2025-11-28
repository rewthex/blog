import express from 'express';
import passport from 'passport'
import jwtStrategy from './config/passport.js'
import { prisma } from './lib/prisma.js';

import authRoutes from './modules/auth/auth.routes.js';
import commentRoutes from './modules/comments/comment.routes.js';
import postRoutes from './modules/posts/post.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
passport.use(jwtStrategy);

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/posts/:postId/comments', commentRoutes);

app.use((err, req, res, next) => {
	res.json({ error: err.message });
});

export default app;
