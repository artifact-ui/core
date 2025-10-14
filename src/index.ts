// Foundation styles (order matches TidyTrek)
import './styles/foundation/tokens.css';
import './styles/animations.css';
import './styles/foundation/reset.css';
import './styles/foundation/global.css';

// Themes
import './styles/themes/light.css';
import './styles/themes/dark.css';
import './styles/themes/canvas.css';

// Palettes and utils
import './styles/palette/app-palettes.css';
import './styles/utils/mixins.module.css';

// Export all components
export * from './components';

// Export utils (internal use, but available if needed)
export { cn } from './utils/cn';
