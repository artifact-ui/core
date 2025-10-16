import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Provider, Root, Trigger, Content } from './tooltip';

describe('Tooltip', () => {
	it('renders trigger element', () => {
		renderComponent(
			<Provider>
				<Root>
					<Trigger>View employee details</Trigger>
					<Content>Michael Scott - Regional Manager</Content>
				</Root>
			</Provider>,
		);

		expect(screen.getByText('View employee details')).toBeInTheDocument();
	});

	it('shows tooltip content on hover', async () => {
		const { user } = renderComponent(
			<Provider>
				<Root>
					<Trigger>Sales Dashboard</Trigger>
					<Content>Q4 sales performance metrics</Content>
				</Root>
			</Provider>,
		);

		const trigger = screen.getByText('Sales Dashboard');
		await user.hover(trigger);

		const tooltips = await screen.findAllByText('Q4 sales performance metrics');
		expect(tooltips.length).toBeGreaterThan(0);
	});

	it('renders with different sides', () => {
		renderComponent(
			<Provider>
				<Root>
					<Trigger>Help</Trigger>
					<Content side="top">Tooltip appears above</Content>
				</Root>
			</Provider>,
		);

		expect(screen.getByText('Help')).toBeInTheDocument();
	});

	it('renders with custom sideOffset', () => {
		renderComponent(
			<Provider>
				<Root>
					<Trigger>Info</Trigger>
					<Content sideOffset={10}>Custom offset tooltip</Content>
				</Root>
			</Provider>,
		);

		expect(screen.getByText('Info')).toBeInTheDocument();
	});

	it('renders multiple tooltips', () => {
		renderComponent(
			<Provider>
				<Root>
					<Trigger>Branch Location</Trigger>
					<Content>Scranton, Pennsylvania</Content>
				</Root>
				<Root>
					<Trigger>Office Manager</Trigger>
					<Content>Pam Beesly</Content>
				</Root>
			</Provider>,
		);

		expect(screen.getByText('Branch Location')).toBeInTheDocument();
		expect(screen.getByText('Office Manager')).toBeInTheDocument();
	});
});
