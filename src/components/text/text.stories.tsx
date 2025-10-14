import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';
import { CheckIcon } from 'lucide-react';
import { Stack } from '@/components/layout';

const meta: Meta<typeof Text> = {
	title: 'Alpine/Text',
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
		<Stack className="gap-4">
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
			<Text color="brand">Brand colored text</Text>
			<Text iconLeft={<CheckIcon size={16} />}>Text with icon</Text>
		</Stack>
	),
};

