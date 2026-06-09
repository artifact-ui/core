import type { Meta, StoryObj } from '@storybook/react';
import * as AlertDialog from './alert-dialog';
import { Button } from '../button/button';
import { CircleAlertIcon } from '../../icons';

const meta: Meta<typeof AlertDialog.Content> = {
	title: 'Overlay/AlertDialog',
	component: AlertDialog.Content,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<AlertDialog.Root>
			<AlertDialog.Trigger>
				<Button color="danger">Remove from collection</Button>
			</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Title iconLeft={<CircleAlertIcon />}>
					Remove this artifact?
				</AlertDialog.Title>
				<AlertDialog.Description>
					This removes the piece from the public collection. The record stays in the
					archive and can be restored later.
				</AlertDialog.Description>
				<AlertDialog.Footer>
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
					<AlertDialog.Action color="danger">Remove</AlertDialog.Action>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog.Root>
	),
};

export const Confirmation: Story = {
	render: () => (
		<AlertDialog.Root>
			<AlertDialog.Trigger>
				<Button>Publish exhibit</Button>
			</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Title>Publish this exhibit?</AlertDialog.Title>
				<AlertDialog.Description>
					The exhibit becomes visible to all visitors immediately.
				</AlertDialog.Description>
				<AlertDialog.Footer>
					<AlertDialog.Cancel>Not yet</AlertDialog.Cancel>
					<AlertDialog.Action>Publish</AlertDialog.Action>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog.Root>
	),
};
