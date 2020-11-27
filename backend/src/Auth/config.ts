import { Token } from 'src/graphql';

const crtToken = (secret: Token, expiresIn: string) => ({
	secret,
	expiresIn,
});

const AuthConfig = () => ({
	accessToken: {
		secret: process.env.ACCESS_SECRET,
		signOptions: { expiresIn: '5m' },
	},
	refreshToken: crtToken(process.env.REFRESH_SECRET, '10m'),
});

export default AuthConfig;
