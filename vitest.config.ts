import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/tests/setup.ts',
		css: true,
		include: ['src/**/*.{test,spec}.{ts,tsx}'],
		exclude: ['**/node_modules/**', '**/dist/**'],
		coverage: {
			exclude: ['**/node_modules/**', '**/dist/**', '**/*.config.*', '**/coverage/**'],
		},
	},
});
