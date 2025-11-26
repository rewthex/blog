import * as authService from './auth.service.js';

export async function login(req, res, next) {
	try {
		const { email, password } = req.body;
		const token = await authService.login(email, password);
		res.json({ token });
	} catch (error) {
		next(error);
	}
}

export async function signup(req, res, next) {
	try {
		const { name, email, password } = req.body;
		const user = await authService.signup(name, email, password);
		res.json({ user });
	} catch (error) {
		next(error);
	}
}
