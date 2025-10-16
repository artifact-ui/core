import { describe, it, expect } from 'vitest';
import { renderComponent } from '@/tests/test-utils';
import { Separator } from './separator';

describe('Separator', () => {
	it('renders horizontal separator', () => {
		const { container } = renderComponent(<Separator orientation="horizontal" />);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('renders vertical separator', () => {
		const { container } = renderComponent(<Separator orientation="vertical" />);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('renders with props', () => {
		const { container } = renderComponent(
			<Separator color="accent" size="3" opacity="50" />,
		);

		expect(container.firstChild).toBeInTheDocument();
	});
});
