import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [react(), dts({ include: ['src'] })],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'ArtifactUI',
			formats: ['es'],
			fileName: 'artifact-ui',
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime', 'react-day-picker'],
			output: {
				preserveModules: true,
				preserveModulesRoot: 'src',
				entryFileNames: '[name].js',
				assetFileNames: (assetInfo) => {
					// CSS files get renamed to artifact-ui.css
					if (assetInfo.names?.[0] === 'style.css') {
						return 'artifact-ui.css';
					}
					return '[name][extname]';
				},
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},
});
