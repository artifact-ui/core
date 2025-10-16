import type { Meta, StoryObj } from '@storybook/react';
import * as Card from './card';
import { Button } from '../button/button';

const meta: Meta<typeof Card.Root> = {
	title: 'Artifact/Card',
	component: Card.Root,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'surface', 'ghost'],
		},
		size: {
			control: 'select',
			options: ['1', '2', '3'],
		},
		radius: {
			control: 'select',
			options: ['none', '1', '2', '3'],
		},
		shadow: {
			control: 'select',
			options: [false, true, 'classic', 'spread', 'paper'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'default',
		size: '2',
		shadow: false,
	},
	render: (args) => (
		<Card.Root {...args} style={{ width: '300px' }}>
			<Card.Header>
				<h3>Card Title</h3>
			</Card.Header>
			<Card.Body>
				<p>
					This is the card body content. It can contain any type of content including
					text, buttons, or other components.
				</p>
			</Card.Body>
			<Card.Footer>
				<Button>Action</Button>
			</Card.Footer>
		</Card.Root>
	),
};

export const Surface: Story = {
	args: {
		variant: 'surface',
		size: '2',
		radius: '2',
		shadow: 'classic',
	},
	render: (args) => (
		<Card.Root {...args} style={{ width: '300px' }}>
			<Card.Header>
				<h3>Surface Card</h3>
			</Card.Header>
			<Card.Body>
				<p>Surface variant with medium rounded corners and classic shadow.</p>
			</Card.Body>
			<Card.Footer>
				<Button variant="outline">Learn More</Button>
			</Card.Footer>
		</Card.Root>
	),
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		size: '2',
	},
	render: (args) => (
		<Card.Root {...args} style={{ width: '300px' }}>
			<Card.Header>
				<h3>Ghost Card</h3>
			</Card.Header>
			<Card.Body>
				<p>Ghost variant with no borders or background.</p>
			</Card.Body>
		</Card.Root>
	),
};
