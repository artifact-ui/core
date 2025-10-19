import type { Meta, StoryObj } from '@storybook/react';
import * as Card from './card';
import { Button } from '../button/button';
import { Text } from '../text/text';
import { Heading } from '../heading/heading';
import { Flex } from '../layout/flex';

const meta: Meta<typeof Card.Root> = {
	title: 'Data Display/Card',
	component: Card.Root,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'surface', 'ghost'],
			description: 'Visual style of the card',
		},
		size: {
			control: 'select',
			options: ['1', '2', '3'],
			description: 'Padding size scale',
		},
		radius: {
			control: 'select',
			options: ['none', '1', '2', '3'],
			description: 'Border radius',
		},
		shadow: {
			control: 'select',
			options: [false, true, 'classic', 'spread', 'paper'],
			description: 'Box shadow style',
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
		<Card.Root {...args} style={{ width: '350px' }}>
			<Card.Header>
				<Heading size="4">Ceramic Collection</Heading>
			</Card.Header>
			<Card.Body>
				<Text>
					A curated collection of pottery fragments from the Neolithic period, including
					decorated vessels and functional ceramics.
				</Text>
			</Card.Body>
			<Card.Footer>
				<Button>View Collection</Button>
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
		<Card.Root {...args} style={{ width: '350px' }}>
			<Card.Header>
				<Heading size="4">Archive Details</Heading>
			</Card.Header>
			<Card.Body>
				<Text>
					Comprehensive documentation and metadata for specimen cataloging and research
					analysis.
				</Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="outline">View Archive</Button>
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
		<Card.Root {...args} style={{ width: '350px' }}>
			<Card.Header>
				<Heading size="4">Research Notes</Heading>
			</Card.Header>
			<Card.Body>
				<Text>Ghost variant with minimal visual styling for subtle content grouping.</Text>
			</Card.Body>
		</Card.Root>
	),
};

export const WithShadow: Story = {
	args: {
		variant: 'surface',
		size: '2',
		shadow: 'spread',
	},
	render: (args) => (
		<Card.Root {...args} style={{ width: '350px' }}>
			<Card.Header>
				<Heading size="4">Stone Tools Catalog</Heading>
			</Card.Header>
			<Card.Body>
				<Text>
					Hand-carved implements and cutting tools from the Bronze Age excavation site.
				</Text>
			</Card.Body>
			<Card.Footer>
				<Flex gap="2">
					<Button size="2">View</Button>
					<Button size="2" variant="outline">
						Export
					</Button>
				</Flex>
			</Card.Footer>
		</Card.Root>
	),
};

export const AllVariants: Story = {
	render: () => (
		<Flex gap="4" style={{ flexWrap: 'wrap' }}>
			<Card.Root variant="default" style={{ width: '250px' }}>
				<Card.Header>
					<Heading size="4">Default</Heading>
				</Card.Header>
				<Card.Body>
					<Text size="2">Default card variant with standard styling.</Text>
				</Card.Body>
			</Card.Root>

			<Card.Root variant="surface" shadow="classic" style={{ width: '250px' }}>
				<Card.Header>
					<Heading size="4">Surface</Heading>
				</Card.Header>
				<Card.Body>
					<Text size="2">Surface variant with elevated shadow.</Text>
				</Card.Body>
			</Card.Root>

			<Card.Root variant="ghost" style={{ width: '250px' }}>
				<Card.Header>
					<Heading size="4">Ghost</Heading>
				</Card.Header>
				<Card.Body>
					<Text size="2">Ghost variant with minimal styling.</Text>
				</Card.Body>
			</Card.Root>
		</Flex>
	),
};
