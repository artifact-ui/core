import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Text } from './text';
import { CheckIcon, ChevronRightIcon } from '@/icons';

describe('Text', () => {
	it('renders text content', () => {
		renderComponent(<Text>Employee of the Month: Jim Halpert</Text>);

		expect(screen.getByText('Employee of the Month: Jim Halpert')).toBeInTheDocument();
	});

	it('renders with icons', () => {
		renderComponent(
			<Text
				iconLeft={<CheckIcon data-testid="check-icon" />}
				iconRight={<ChevronRightIcon data-testid="chevron-icon" />}>
				Task completed
			</Text>,
		);

		expect(screen.getByText('Task completed')).toBeInTheDocument();
		expect(screen.getByTestId('check-icon')).toBeInTheDocument();
		expect(screen.getByTestId('chevron-icon')).toBeInTheDocument();
	});

	it('renders as different elements', () => {
		const { container } = renderComponent(
			<>
				<Text as="span">Branch Manager</Text>
				<Text as="label" htmlFor="employee-name">
					Employee Name
				</Text>
			</>,
		);

		expect(container.querySelector('span')).toBeInTheDocument();
		expect(container.querySelector('label')).toBeInTheDocument();
		expect(container.querySelector('label')).toHaveAttribute('for', 'employee-name');
	});

	it('renders with combined props', () => {
		renderComponent(
			<Text size="6" weight="bold" color="accent" align="center" uppercase italic>
				Dunder Mifflin Paper Company
			</Text>,
		);

		expect(screen.getByText('Dunder Mifflin Paper Company')).toBeInTheDocument();
	});
});
