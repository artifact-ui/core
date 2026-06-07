import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import * as Drawer from './drawer';
import { Button } from '../button/button';

const renderDrawer = () =>
	renderComponent(
		<Drawer.Root>
			<Drawer.Trigger>
				<Button>Open</Button>
			</Drawer.Trigger>
			<Drawer.Content side="right" ariaDescription="Settings panel">
				<Drawer.Title>Settings</Drawer.Title>
			</Drawer.Content>
		</Drawer.Root>,
	);

describe('Drawer', () => {
	it('is closed by default', () => {
		renderDrawer();

		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('opens when the trigger is clicked', async () => {
		const { user } = renderDrawer();

		await user.click(screen.getByRole('button', { name: 'Open' }));

		expect(screen.getByRole('dialog')).toBeInTheDocument();
		expect(screen.getByText('Settings')).toBeInTheDocument();
	});

	it('renders a close button inside the drawer', async () => {
		const { user } = renderDrawer();

		await user.click(screen.getByRole('button', { name: 'Open' }));

		expect(screen.getByRole('button', { name: /close drawer/i })).toBeInTheDocument();
	});
});
