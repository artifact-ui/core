import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Grid } from './grid';

describe('Grid', () => {
	it('renders children', () => {
		renderComponent(
			<Grid>
				<div>Jim Halpert</div>
				<div>Pam Beesly</div>
				<div>Dwight Schrute</div>
			</Grid>,
		);

		expect(screen.getByText('Jim Halpert')).toBeInTheDocument();
		expect(screen.getByText('Pam Beesly')).toBeInTheDocument();
		expect(screen.getByText('Dwight Schrute')).toBeInTheDocument();
	});

	it('applies columns prop with number', () => {
		const { container } = renderComponent(
			<Grid columns={3}>
				<div>Sales</div>
			</Grid>,
		);

		const grid = container.firstChild as HTMLElement;
		expect(grid).toHaveStyle({ gridTemplateColumns: 'repeat(3, 1fr)' });
	});

	it('applies columns prop with string', () => {
		const { container } = renderComponent(
			<Grid columns="200px 1fr">
				<div>Accounting</div>
			</Grid>,
		);

		const grid = container.firstChild as HTMLElement;
		expect(grid).toHaveStyle({ gridTemplateColumns: '200px 1fr' });
	});

	it('renders with gap', () => {
		const { container } = renderComponent(
			<Grid gap="4">
				<div>Regional Manager</div>
			</Grid>,
		);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('renders with combined props', () => {
		const { container } = renderComponent(
			<Grid columns={2} gap="3" className="office-grid">
				<div>Dunder Mifflin</div>
			</Grid>,
		);

		const grid = container.firstChild as HTMLElement;
		expect(grid).toHaveStyle({ gridTemplateColumns: 'repeat(2, 1fr)' });
		expect(grid).toHaveClass('office-grid');
	});
});
