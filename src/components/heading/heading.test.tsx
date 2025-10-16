import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Heading } from './heading';
import { CheckIcon } from '@/icons';

describe('Heading', () => {
	it('renders text content', () => {
		renderComponent(<Heading>Quarterly Sales Report</Heading>);

		expect(screen.getByText('Quarterly Sales Report')).toBeInTheDocument();
	});

	it('renders with icons', () => {
		renderComponent(
			<Heading
				iconLeft={<CheckIcon data-testid="left-icon" />}
				iconRight={<CheckIcon data-testid="right-icon" />}>
				Task Completed
			</Heading>,
		);

		expect(screen.getByTestId('left-icon')).toBeInTheDocument();
		expect(screen.getByTestId('right-icon')).toBeInTheDocument();
		expect(screen.getByText('Task Completed')).toBeInTheDocument();
	});

	it('renders with correct semantic element using as prop', () => {
		renderComponent(<Heading as="h1">Company Overview</Heading>);

		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Company Overview');
	});

	it('renders with props', () => {
		renderComponent(
			<Heading size="1" weight="normal" color="accent" align="center">
				Welcome to Dunder Mifflin
			</Heading>,
		);

		expect(screen.getByText('Welcome to Dunder Mifflin')).toBeInTheDocument();
	});
});
