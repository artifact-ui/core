import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

type RenderOptions = Parameters<typeof render>[1];

export const renderComponent = (ui: ReactElement, options?: RenderOptions) => {
	return {
		...render(ui, options),
		user: userEvent.setup(),
	};
};
