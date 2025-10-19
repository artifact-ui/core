import { addons } from 'storybook/manager-api';
import artifactTheme from './artifact-theme';

addons.setConfig({
	theme: artifactTheme,
});
