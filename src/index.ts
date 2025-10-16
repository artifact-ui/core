// Foundation styles (order matches TidyTrek)
import './styles/foundation/tokens.css';
import './styles/foundation/reset.css';
import './styles/foundation/global.css';

// Themes
import './styles/themes/light.css';
import './styles/themes/dark.css';
import './styles/themes/accent.css';
import './styles/themes/radius.css';

// Provider
export { ArtifactProvider } from './ArtifactProvider';
export type { Theme, Accent, Radius, ArtifactProviderProps } from './ArtifactProvider';

// Components
export * from './components';

// Utils (internal use, but available if needed)
export { cn } from './utils/cn';
