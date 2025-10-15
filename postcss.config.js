import autoprefixer from 'autoprefixer';

const preserveLayerOrder = () => ({
	postcssPlugin: 'preserve-layer-order',
	Once(root) {
		const hasDeclaration = root.nodes.some(
			(node) =>
				node.type === 'atrule' && node.name === 'layer' && node.params.includes(','),
		);
		if (!hasDeclaration) {
			root.prepend({
				type: 'atrule',
				name: 'layer',
				params: 'foundation, components, overrides',
			});
		}
	},
});
preserveLayerOrder.postcss = true;

export default {
	plugins: [preserveLayerOrder(), autoprefixer],
};
