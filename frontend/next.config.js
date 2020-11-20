const withSASS = require('@zeit/next-sass')();

const { env } = process;

module.exports = {
	withSASS,
	env: {
		HOST: env.HOST,
		HOST_GRAPHQL: env.HOST_GRAPHQL,
	},
};
