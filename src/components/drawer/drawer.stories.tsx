import type { Meta, StoryObj } from '@storybook/react';
import * as Drawer from './drawer';
import { Button } from '../button/button';

const meta: Meta<typeof Drawer.Content> = {
	title: 'Overlay/Drawer',
	component: Drawer.Content,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		side: {
			control: 'inline-radio',
			options: ['top', 'right', 'bottom', 'left'],
			description: 'Edge the drawer slides in from',
		},
		size: {
			control: 'inline-radio',
			options: ['1', '2', '3'],
			description: 'Width (left/right) or height (top/bottom)',
		},
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		side: 'right',
		size: '2',
	},
	render: (args) => (
		<Drawer.Root>
			<Drawer.Trigger>
				<Button>Filter collection</Button>
			</Drawer.Trigger>
			<Drawer.Content {...args}>
				<Drawer.Title>Filter Collection</Drawer.Title>
				<Drawer.Description>
					Narrow the archive by period, material, and origin.
				</Drawer.Description>
			</Drawer.Content>
		</Drawer.Root>
	),
};
