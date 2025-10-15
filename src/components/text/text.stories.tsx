import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';
import { Stack } from '../layout/stack';

const meta: Meta<typeof Text> = {
	title: 'Artifact/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		children: 'This is some text content',
	},
};

export const Examples: Story = {
	render: () => (
		<Stack gap="4">
			<Text>Default text</Text>
			<Text size="6" weight="bold">
				Large bold text
			</Text>
			<Text size="2" color="secondary">
				Small secondary text
			</Text>
			<Text size="2" color="tertiary" uppercase>
				Category Label
			</Text>
			<Text color="secondary" italic>
				Italic description text
			</Text>
			<Text color="accent">Accent colored text</Text>
		</Stack>
	),
};
