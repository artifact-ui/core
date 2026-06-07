import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import * as Accordion from './accordion';
import { InfoIcon } from '../../icons';

const renderAccordion = () =>
	renderComponent(
		<Accordion.Root type="single" collapsible>
			<Accordion.Item value="sales">
				<Accordion.Trigger>Sales</Accordion.Trigger>
				<Accordion.Content>Michael Scott leads the sales team.</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="reception">
				<Accordion.Trigger>Reception</Accordion.Trigger>
				<Accordion.Content>Pam Beesly greets every visitor.</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>,
	);

describe('Accordion', () => {
	it('renders triggers collapsed by default', () => {
		renderAccordion();

		expect(screen.getByRole('button', { name: 'Sales' })).toHaveAttribute(
			'aria-expanded',
			'false',
		);
	});

	it('expands a panel when its trigger is clicked', async () => {
		const { user } = renderAccordion();

		await user.click(screen.getByRole('button', { name: 'Sales' }));

		expect(screen.getByRole('button', { name: 'Sales' })).toHaveAttribute(
			'aria-expanded',
			'true',
		);
		expect(screen.getByText(/leads the sales team/i)).toBeInTheDocument();
	});

	it('renders a leading icon when iconLeft is provided', () => {
		renderComponent(
			<Accordion.Root type="single" collapsible>
				<Accordion.Item value="sales">
					<Accordion.Trigger iconLeft={<InfoIcon data-testid="lead-icon" />}>
						Sales
					</Accordion.Trigger>
					<Accordion.Content>Content</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>,
		);

		expect(screen.getByTestId('lead-icon')).toBeInTheDocument();
	});

	it('collapses an open panel when clicked again', async () => {
		const { user } = renderAccordion();

		const trigger = screen.getByRole('button', { name: 'Sales' });
		await user.click(trigger);
		await user.click(trigger);

		expect(trigger).toHaveAttribute('aria-expanded', 'false');
	});
});
