module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:@wordpress/eslint-plugin/recommended'],
	parserOptions: {
		ecmaVersion: 12,
		ecmaFeatures: {
			jsx: true,
		},
		requireConfigFile: false,
		sourceType: 'module',
	},
};
