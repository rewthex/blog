import { prisma } from '../../lib/prisma.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function login(email, password) {
	const user = await prisma.user.findUnique({ where: { email } });
	if (!user) {
		throw new Error("User doesn't exist");
	}

	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		throw new Error('Password is invalid.');
	}

	const token = issueToken(user.id, user.email);

	return { token, user: { id: user.id, email: user.email, name: user.name } };
}

export async function signup(name, email, password) {
	const userExists = await prisma.user.findUnique({ where: { email } });
	if (userExists) {
		throw new Error('User already exists.');
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await prisma.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	});
	const token = issueToken(user.id, user.email);

	return { token, user: { id: user.id, email: user.email, name: user.name } };
}

export function issueToken(userId, email) {
	const token = jwt.sign({ userId, email }, process.env.JWT_SECRET, {
		expiresIn: '3d',
	});
	return token;
}