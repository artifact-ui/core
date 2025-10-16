import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Badge } from './badge';
import { CheckIcon, UserIcon } from '@/icons';

describe('Badge', () => {
	it('renders text content', () => {
		renderComponent(<Badge>Sales</Badge>);

		expect(screen.getByText('Sales')).toBeInTheDocument();
	});

	it('renders with icon on left', () => {
		renderComponent(
			<Badge iconLeft={<UserIcon data-testid="user-icon" />}>Dwight Schrute</Badge>,
		);

		expect(screen.getByTestId('user-icon')).toBeInTheDocument();
		expect(screen.getByText('Dwight Schrute')).toBeInTheDocument();
	});

	it('renders with icon on right', () => {
		renderComponent(
			<Badge iconRight={<CheckIcon data-testid="check-icon" />}>Approved</Badge>,
		);

		expect(screen.getByTestId('check-icon')).toBeInTheDocument();
		expect(screen.getByText('Approved')).toBeInTheDocument();
	});

	it('renders with both left and right icons', () => {
		renderComponent(
			<Badge
				iconLeft={<UserIcon data-testid="user-icon" />}
				iconRight={<CheckIcon data-testid="check-icon" />}>
				Regional Manager
			</Badge>,
		);

		expect(screen.getByTestId('user-icon')).toBeInTheDocument();
		expect(screen.getByTestId('check-icon')).toBeInTheDocument();
		expect(screen.getByText('Regional Manager')).toBeInTheDocument();
	});

	it('renders with different variants', () => {
		renderComponent(<Badge variant="outline">Accounting</Badge>);

		expect(screen.getByText('Accounting')).toBeInTheDocument();
	});

	it('renders with different colors', () => {
		renderComponent(<Badge color="success">Quota Met</Badge>);

		expect(screen.getByText('Quota Met')).toBeInTheDocument();
	});

	it('renders with different sizes', () => {
		renderComponent(<Badge size="1">Urgent</Badge>);

		expect(screen.getByText('Urgent')).toBeInTheDocument();
	});

	it('renders with combined variant and color', () => {
		renderComponent(
			<Badge variant="soft" color="danger">
				Action Required
			</Badge>,
		);

		expect(screen.getByText('Action Required')).toBeInTheDocument();
	});
});
