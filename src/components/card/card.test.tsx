import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Root as Card, Header, Body, Footer } from './card';

describe('Card', () => {
	it('renders basic content', () => {
		renderComponent(<Card>Client summary for Q4</Card>);

		expect(screen.getByText('Client summary for Q4')).toBeInTheDocument();
	});

	it('renders compound structure with Header, Body, and Footer', () => {
		renderComponent(
			<Card>
				<Header>Employee Details</Header>
				<Body>Jim Halpert - Sales Representative</Body>
				<Footer>Scranton Branch</Footer>
			</Card>,
		);

		expect(screen.getByText('Employee Details')).toBeInTheDocument();
		expect(screen.getByText('Jim Halpert - Sales Representative')).toBeInTheDocument();
		expect(screen.getByText('Scranton Branch')).toBeInTheDocument();
	});

	it('renders with different variants', () => {
		renderComponent(<Card variant="surface">Upcoming team meeting</Card>);

		expect(screen.getByText('Upcoming team meeting')).toBeInTheDocument();
	});

	it('renders with different sizes', () => {
		renderComponent(<Card size="3">Regional performance report</Card>);

		expect(screen.getByText('Regional performance report')).toBeInTheDocument();
	});

	it('renders with interactive state', () => {
		renderComponent(<Card interactive>Click to view expense details</Card>);

		expect(screen.getByText('Click to view expense details')).toBeInTheDocument();
	});

	it('renders with shadow', () => {
		renderComponent(<Card shadow="classic">Budget summary</Card>);

		expect(screen.getByText('Budget summary')).toBeInTheDocument();
	});

	describe('asChild', () => {
		it('renders as an anchor when asChild wraps a link', () => {
			renderComponent(
				<Card asChild>
					<a href="/clients/42">Client summary for Q4</a>
				</Card>,
			);

			const link = screen.getByRole('link', { name: /client summary for q4/i });

			expect(link).toHaveAttribute('href', '/clients/42');
		});

		it('renders compound children inside the slotted element', () => {
			renderComponent(
				<Card asChild>
					<a href="/employees/jim">
						<Header>Employee Details</Header>
						<Body>Jim Halpert - Sales Representative</Body>
					</a>
				</Card>,
			);

			const link = screen.getByRole('link');

			expect(link).toContainElement(screen.getByText('Employee Details'));
			expect(link).toContainElement(
				screen.getByText('Jim Halpert - Sales Representative'),
			);
		});
	});
});
