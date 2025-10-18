import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Toast, ToastProvider } from './toast';

const renderToast = (ui: React.ReactElement) => {
	return renderComponent(<ToastProvider>{ui}</ToastProvider>);
};

describe('Toast', () => {
	it('renders title', () => {
		renderToast(
			<Toast open={true} onOpenChange={vi.fn()} title="Payment processed">
				Your payment was successful.
			</Toast>,
		);

		expect(screen.getByText('Payment processed')).toBeInTheDocument();
	});

	it('renders description', () => {
		renderToast(
			<Toast
				open={true}
				onOpenChange={vi.fn()}
				title="Payment processed"
				description="Receipt sent to your email.">
				Your payment was successful.
			</Toast>,
		);

		expect(screen.getByText('Receipt sent to your email.')).toBeInTheDocument();
	});

	it('renders children content', () => {
		renderToast(
			<Toast open={true} onOpenChange={vi.fn()} title="Notification">
				Changes saved successfully.
			</Toast>,
		);

		expect(screen.getByText('Changes saved successfully.')).toBeInTheDocument();
	});

	it('calls onClose when close button is clicked', async () => {
		const handleClose = vi.fn();
		const { user } = renderToast(
			<Toast
				open={true}
				onOpenChange={vi.fn()}
				title="Notification"
				onClose={handleClose}>
				Message content
			</Toast>,
		);

		const closeButton = screen.getByRole('button', { name: /close/i });
		await user.click(closeButton);

		expect(handleClose).toHaveBeenCalledTimes(1);
	});
});

describe('Toast Variants', () => {
	it('renders with default variant', () => {
		renderToast(
			<Toast open={true} onOpenChange={vi.fn()} variant="default" title="System">
				System notification
			</Toast>,
		);

		expect(screen.getByText('System notification')).toBeInTheDocument();
	});

	it('renders with info variant', () => {
		renderToast(
			<Toast open={true} onOpenChange={vi.fn()} variant="info" title="Information">
				New updates available
			</Toast>,
		);

		expect(screen.getByText('New updates available')).toBeInTheDocument();
	});

	it('renders with success variant', () => {
		renderToast(
			<Toast open={true} onOpenChange={vi.fn()} variant="success" title="Success">
				Operation completed
			</Toast>,
		);

		expect(screen.getByText('Operation completed')).toBeInTheDocument();
	});

	it('renders with warning variant', () => {
		renderToast(
			<Toast open={true} onOpenChange={vi.fn()} variant="warning" title="Warning">
				Session expiring
			</Toast>,
		);

		expect(screen.getByText('Session expiring')).toBeInTheDocument();
	});

	it('renders with error variant', () => {
		renderToast(
			<Toast open={true} onOpenChange={vi.fn()} variant="error" title="Error">
				An error occurred
			</Toast>,
		);

		expect(screen.getByText('An error occurred')).toBeInTheDocument();
	});
});
