import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';
import { Stack } from '../layout/stack';

const meta: Meta<typeof Heading> = {
	title: 'Artifact/Heading',
	component: Heading,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
	args: {
		children: 'Default Heading',
	},
};

export const Examples: Story = {
	render: () => (
		<Stack gap="4">
			<Heading>Default heading</Heading>
			<Heading as="h1" size="8">
				Large page title
			</Heading>
			<Heading size="4" weight="medium">
				Medium card title
			</Heading>
			<Heading size="2" color="secondary">
				Small secondary heading
			</Heading>
			<Heading color="accent">Accent colored heading</Heading>
			<Heading weight="normal" color="tertiary">
				Light tertiary heading
			</Heading>
		</Stack>
	),
};
