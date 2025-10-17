import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Layers build - preserves @layer declarations
// Only builds CSS (JS already built in no-layers step)
export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'ArtifactUI',
			formats: ['es'],
			fileName: 'artifact-ui-layers',
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo.names?.[0] === 'style.css') {
						return 'artifact-ui-layers.css';
					}
					return '[name][extname]';
				},
			},
		},
		emptyOutDir: false, // Don't clear dist
	},
});
