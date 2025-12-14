// Foundation styles (order matches TidyTrek)
import './styles/foundation/tokens.css';
import './styles/foundation/reset.css';
import './styles/foundation/global.css';

// Themes
import './styles/themes/light.css';
import './styles/themes/dark.css';
import './styles/themes/slate.css';
import './styles/themes/canvas.css';
import './styles/themes/accent.css';
import './styles/themes/radius.css';

// Provider
export { ArtifactProvider } from './artifact-provider';
export type { Theme, Accent, Radius, ArtifactProviderProps } from './artifact-provider';

// Script (SSR/SSG flash prevention)
export { ArtifactScript } from './artifact-script';
export type { ArtifactScriptProps } from './artifact-script';

// Components
export * from './components';

// Utils (internal use, but available if needed)
export { cn } from './utils/cn';
