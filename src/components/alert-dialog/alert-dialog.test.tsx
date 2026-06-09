import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import * as AlertDialog from './alert-dialog';
import { Button } from '../button/button';

const renderAlertDialog = (onAction = vi.fn()) =>
	renderComponent(
		<AlertDialog.Root>
			<AlertDialog.Trigger>
				<Button>Open dialog</Button>
			</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Title>Delete this record?</AlertDialog.Title>
				<AlertDialog.Description>This cannot be undone.</AlertDialog.Description>
				<AlertDialog.Footer>
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
					<AlertDialog.Action color="danger" onClick={onAction}>
						Delete
					</AlertDialog.Action>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog.Root>,
	);

describe('AlertDialog', () => {
	it('is closed by default', () => {
		renderAlertDialog();

		expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
	});

	it('opens with title, description, and action buttons', async () => {
		const { user } = renderAlertDialog();

		await user.click(screen.getByRole('button', { name: 'Open dialog' }));

		expect(screen.getByRole('alertdialog')).toBeInTheDocument();
		expect(screen.getByText('Delete this record?')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
	});

	it('runs the action handler when the action button is clicked', async () => {
		const onAction = vi.fn();
		const { user } = renderAlertDialog(onAction);

		await user.click(screen.getByRole('button', { name: 'Open dialog' }));
		await user.click(screen.getByRole('button', { name: 'Delete' }));

		expect(onAction).toHaveBeenCalledTimes(1);
	});
});
