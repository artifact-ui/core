import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Flex } from './flex';

describe('Flex', () => {
	it('renders children', () => {
		renderComponent(
			<Flex>
				<div>Jim Halpert</div>
				<div>Pam Beesly</div>
			</Flex>,
		);

		expect(screen.getByText('Jim Halpert')).toBeInTheDocument();
		expect(screen.getByText('Pam Beesly')).toBeInTheDocument();
	});

	it('renders with row direction', () => {
		const { container } = renderComponent(
			<Flex direction="row">
				<div>Sales</div>
			</Flex>,
		);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('renders with column direction', () => {
		const { container } = renderComponent(
			<Flex direction="column">
				<div>Accounting</div>
			</Flex>,
		);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('renders with gap', () => {
		const { container } = renderComponent(
			<Flex gap="4">
				<div>Michael Scott</div>
			</Flex>,
		);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('renders with justify and align props', () => {
		const { container } = renderComponent(
			<Flex justify="center" align="center">
				<div>Regional Manager</div>
			</Flex>,
		);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('renders with combined props', () => {
		const { container } = renderComponent(
			<Flex direction="column" gap="2" justify="between" align="start" className="office-flex">
				<div>Dunder Mifflin</div>
			</Flex>,
		);

		const flex = container.firstChild as HTMLElement;
		expect(flex).toHaveClass('office-flex');
	});
});
