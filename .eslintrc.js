module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:@wordpress/eslint-plugin/recommended'],
	parserOptions: {
		ecmaVersion: 12,
		requireConfigFile: false,
		sourceType: 'module',
	},
	settings: {
		jsdoc: {
			mode: 'typescript',
		},
	},
};
