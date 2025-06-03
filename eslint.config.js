import globals from 'globals';
import nette from '@nette/eslint-plugin/typescript';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		extends: [nette.configs.customize({ browser: false })],
	},

	{
		files: ['**/*.ts'],

		languageOptions: {
			globals: {
				...globals.mocha,
				...globals.node,
			},
		},

		extends: [nette.configs.customize({ browser: false, typescript: true })],
	},
]);
