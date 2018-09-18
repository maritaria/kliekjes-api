// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
	env: {
		node: true,
		es6: true
	},
	extends: [
		'eslint:recommended'
	],
	// add your custom rules here
	rules: {
		'indent': ['error', 'tab'],
		// allow async-await
		'generator-star-spacing': 'off',
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	}
};
