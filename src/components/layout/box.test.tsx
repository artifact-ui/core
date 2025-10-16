import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Box } from './box';

describe('Box', () => {
	it('renders children', () => {
		renderComponent(<Box>Sales Dashboard</Box>);

		expect(screen.getByText('Sales Dashboard')).toBeInTheDocument();
	});

	it('applies padding prop', () => {
		renderComponent(<Box padding="4">Office Directory</Box>);

		const box = screen.getByText('Office Directory');
		expect(box).toHaveStyle({ padding: '4' });
	});

	it('applies margin prop', () => {
		renderComponent(<Box margin="2">Department List</Box>);

		const box = screen.getByText('Department List');
		expect(box).toHaveStyle({ margin: '2' });
	});

	it('applies custom className', () => {
		renderComponent(<Box className="custom-class">Employee Records</Box>);

		const box = screen.getByText('Employee Records');
		expect(box).toHaveClass('custom-class');
	});

	it('renders with combined props', () => {
		renderComponent(
			<Box padding="3" margin="2" className="office-box">
				Branch Information
			</Box>,
		);

		const box = screen.getByText('Branch Information');
		expect(box).toHaveStyle({ padding: '3', margin: '2' });
		expect(box).toHaveClass('office-box');
	});
});
