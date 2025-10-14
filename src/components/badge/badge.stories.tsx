import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Stack } from '../layout/stack';
import { Flex } from '../layout/flex';

const meta: Meta<typeof Badge> = {
	title: 'Alpine/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Ultralight',
	},
};

export const Examples: Story = {
	render: () => (
		<Stack gap="2rem" style={{ padding: '2rem' }}>
			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Variants
				</h3>
				<Flex gap="1rem" align="center">
					<Badge variant="solid">Solid</Badge>
					<Badge variant="soft">Soft</Badge>
					<Badge variant="outline">Outline</Badge>
				</Flex>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Colors
				</h3>
				<Stack gap="1rem">
					<Flex gap="0.5rem" align="center">
						<Badge color="primary">Primary</Badge>
						<Badge color="secondary">Secondary</Badge>
						<Badge color="tertiary">Tertiary</Badge>
					</Flex>
					<Flex gap="0.5rem" align="center">
						<Badge color="brand">Brand</Badge>
						<Badge color="info">Info</Badge>
						<Badge color="error">Error</Badge>
					</Flex>
				</Stack>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Sizes
				</h3>
				<Flex gap="1rem" align="center">
					<Badge size="1">Size 1 (xs)</Badge>
					<Badge size="2">Size 2</Badge>
					<Badge size="3">Size 3 (default)</Badge>
					<Badge size="4">Size 4 (lg)</Badge>
				</Flex>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Radius
				</h3>
				<Flex gap="1rem" align="center">
					<Badge radius="1">Default</Badge>
					<Badge radius="2">Large</Badge>
					<Badge radius="full">Full</Badge>
				</Flex>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					High Contrast
				</h3>
				<Flex gap="1rem" align="center">
					<Badge>Normal</Badge>
					<Badge highContrast>High Contrast</Badge>
				</Flex>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Use Cases
				</h3>
				<Stack gap="1rem">
					<Flex gap="0.5rem" align="center">
						<span>Item Count:</span>
						<Badge variant="solid" color="secondary" radius="full">
							24
						</Badge>
					</Flex>
					<Flex gap="0.5rem" align="center">
						<span>Quantity:</span>
						<Badge variant="solid" color="secondary" radius="full">
							x 3
						</Badge>
					</Flex>
					<Flex gap="0.5rem" align="center">
						<span>Weight:</span>
						<Badge variant="outline" color="tertiary">
							2.5 lbs
						</Badge>
					</Flex>
					<Flex gap="0.5rem" align="center">
						<span>Category:</span>
						<Badge variant="soft" color="brand" size="1">
							Shelter
						</Badge>
					</Flex>
				</Stack>
			</div>
		</Stack>
	),
};
