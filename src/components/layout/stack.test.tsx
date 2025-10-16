import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Stack } from './stack';

describe('Stack', () => {
	it('renders children', () => {
		renderComponent(
			<Stack>
				<div>Sales Report</div>
				<div>HR Documents</div>
				<div>Finance Summary</div>
			</Stack>,
		);

		expect(screen.getByText('Sales Report')).toBeInTheDocument();
		expect(screen.getByText('HR Documents')).toBeInTheDocument();
		expect(screen.getByText('Finance Summary')).toBeInTheDocument();
	});

	it('renders with gap', () => {
		const { container } = renderComponent(
			<Stack gap="4">
				<div>Employee Directory</div>
			</Stack>,
		);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('renders with align start', () => {
		const { container } = renderComponent(
			<Stack align="start">
				<div>Regional Manager</div>
			</Stack>,
		);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('renders with align center', () => {
		const { container } = renderComponent(
			<Stack align="center">
				<div>Branch Information</div>
			</Stack>,
		);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('renders with combined props', () => {
		const { container } = renderComponent(
			<Stack gap="3" align="center" className="office-stack">
				<div>Dunder Mifflin</div>
			</Stack>,
		);

		const stack = container.firstChild as HTMLElement;
		expect(stack).toHaveClass('office-stack');
	});
});
