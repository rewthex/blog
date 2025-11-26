import express from 'express';
import session from 'express-session';
import { prisma } from './lib/prisma.js';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';

import authRoutes from './modules/auth/auth.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
	res.json({ error: err.message });
});

export default app;
