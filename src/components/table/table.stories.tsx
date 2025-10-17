import type { Meta, StoryObj } from '@storybook/react';
import * as Table from './table';

const meta: Meta<typeof Table.Root> = {
	title: 'Artifact/Table',
	component: Table.Root,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'surface', 'ghost'],
		},
		size: {
			control: 'select',
			options: ['1', '2', '3'],
		},
		compact: {
			control: 'boolean',
		},
		striped: {
			control: 'boolean',
		},
		radius: {
			control: 'select',
			options: ['none', '1', '2', '3'],
		},
		shadow: {
			control: 'select',
			options: [false, true, 'classic', 'spread', 'paper'],
		},
		highlight: {
			control: 'boolean',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Table.Root>;

export const Default: Story = {
	args: {
		variant: 'default',
		size: '2',
	},
	render: (args) => (
		<Table.Root {...args}>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Catalog ID</Table.HeaderCell>
					<Table.HeaderCell>Description</Table.HeaderCell>
					<Table.HeaderCell justify="center">Period</Table.HeaderCell>
					<Table.HeaderCell justify="center">Location</Table.HeaderCell>
					<Table.HeaderCell justify="end">Year</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>POT-2847</Table.Cell>
					<Table.Cell>Ceramic vessel fragment</Table.Cell>
					<Table.Cell textAlign="center">Neolithic</Table.Cell>
					<Table.Cell textAlign="center">Archive A</Table.Cell>
					<Table.Cell textAlign="end">2018</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>TEX-1923</Table.Cell>
					<Table.Cell>Woven textile sample</Table.Cell>
					<Table.Cell textAlign="center">Bronze Age</Table.Cell>
					<Table.Cell textAlign="center">Archive B</Table.Cell>
					<Table.Cell textAlign="end">2019</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>TOOL-4156</Table.Cell>
					<Table.Cell>Stone cutting implement</Table.Cell>
					<Table.Cell textAlign="center">Iron Age</Table.Cell>
					<Table.Cell textAlign="center">Archive C</Table.Cell>
					<Table.Cell textAlign="end">2022</Table.Cell>
				</Table.Row>
			</Table.Body>
			<Table.Footer>
				<Table.Row>
					<Table.Cell>Total Items</Table.Cell>
					<Table.Cell></Table.Cell>
					<Table.Cell textAlign="center"></Table.Cell>
					<Table.Cell textAlign="center"></Table.Cell>
					<Table.Cell textAlign="end">3</Table.Cell>
				</Table.Row>
			</Table.Footer>
		</Table.Root>
	),
};

export const Surface: Story = {
	args: {
		variant: 'surface',
		size: '2',
	},
	render: (args) => (
		<Table.Root {...args}>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Specimen ID</Table.HeaderCell>
					<Table.HeaderCell>Type</Table.HeaderCell>
					<Table.HeaderCell justify="center">Collection</Table.HeaderCell>
					<Table.HeaderCell justify="end">Status</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>MET-5821</Table.Cell>
					<Table.Cell>Bronze tool fragment</Table.Cell>
					<Table.Cell textAlign="center">Metalwork</Table.Cell>
					<Table.Cell textAlign="end">Cataloged</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>CER-7142</Table.Cell>
					<Table.Cell>Pottery shard</Table.Cell>
					<Table.Cell textAlign="center">Ceramics</Table.Cell>
					<Table.Cell textAlign="end">Archived</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	),
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		size: '2',
	},
	render: (args) => (
		<Table.Root {...args}>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>ID</Table.HeaderCell>
					<Table.HeaderCell>Description</Table.HeaderCell>
					<Table.HeaderCell justify="center">Archive</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>STO-3947</Table.Cell>
					<Table.Cell>Flint arrowhead</Table.Cell>
					<Table.Cell textAlign="center">A</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>TEX-2014</Table.Cell>
					<Table.Cell>Woven fabric</Table.Cell>
					<Table.Cell textAlign="center">B</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	),
};
