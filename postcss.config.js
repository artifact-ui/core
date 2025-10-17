import autoprefixer from 'autoprefixer';

const shouldStripLayers = process.env.BUILD_MODE === 'no-layers';

const layerPlugin = () => ({
	postcssPlugin: 'artifact-layer-plugin',
	Once(root) {
		if (shouldStripLayers) {
			// Remove @layer wrappers but keep content
			root.walkAtRules('layer', (rule) => {
				if (rule.nodes && rule.nodes.length > 0) {
					// Replace @layer node with its children
					rule.replaceWith(rule.nodes);
				} else {
					// Remove empty @layer declarations
					rule.remove();
				}
			});
		} else {
			// Preserve layer order (layered mode)
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
		}
	},
});
layerPlugin.postcss = true;

export default {
	plugins: [layerPlugin(), autoprefixer],
};
