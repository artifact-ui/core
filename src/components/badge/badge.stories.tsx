import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Stack } from '../layout/stack';
import { Flex } from '../layout/flex';
import { CheckIcon, UserIcon, InfoIcon } from '../../icons';

const meta: Meta<typeof Badge> = {
	title: 'Artifact/Badge',
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
		<Stack gap="8" style={{ padding: '2rem' }}>
			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Variants
				</h3>
				<Flex gap="4" align="center">
					<Badge variant="solid">Solid</Badge>
					<Badge variant="soft">Soft</Badge>
					<Badge variant="outline">Outline</Badge>
				</Flex>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Colors
				</h3>
				<Stack gap="4">
					<Flex gap="2" align="center">
						<Badge color="primary">Primary</Badge>
						<Badge color="neutral">Neutral</Badge>
					</Flex>
					<Flex gap="2" align="center">
						<Badge color="info">Info</Badge>
						<Badge color="success">Success</Badge>
						<Badge color="danger">Danger</Badge>
					</Flex>
				</Stack>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Sizes
				</h3>
				<Flex gap="4" align="center">
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
				<Flex gap="4" align="center">
					<Badge radius="1">Default</Badge>
					<Badge radius="2">Large</Badge>
					<Badge radius="full">Full</Badge>
				</Flex>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					High Contrast
				</h3>
				<Flex gap="4" align="center">
					<Badge>Normal</Badge>
					<Badge highContrast>High Contrast</Badge>
				</Flex>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Icons
				</h3>
				<Stack gap="4">
					<Flex gap="2" align="center">
						<Badge iconLeft={<UserIcon />}>User</Badge>
						<Badge iconRight={<CheckIcon />}>Completed</Badge>
						<Badge iconLeft={<InfoIcon />} iconRight={<CheckIcon />}>
							Featured
						</Badge>
					</Flex>
				</Stack>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Icon Gap
				</h3>
				<Stack gap="4">
					<Flex gap="2" align="center">
						<Badge iconLeft={<UserIcon />}>Default</Badge>
						<Badge iconLeft={<UserIcon />} iconGap="2">
							Gap 2
						</Badge>
						<Badge iconLeft={<UserIcon />} iconGap="4">
							Gap 4
						</Badge>
						<Badge iconLeft={<UserIcon />} iconGap="6">
							Gap 6
						</Badge>
					</Flex>
				</Stack>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Use Cases
				</h3>
				<Stack gap="4">
					<Flex gap="2" align="center">
						<span>Item Count:</span>
						<Badge variant="solid" color="neutral" radius="full">
							24
						</Badge>
					</Flex>
					<Flex gap="2" align="center">
						<span>Quantity:</span>
						<Badge variant="solid" color="neutral" radius="full">
							x 3
						</Badge>
					</Flex>
					<Flex gap="2" align="center">
						<span>Weight:</span>
						<Badge variant="outline" color="neutral">
							2.5 lbs
						</Badge>
					</Flex>
					<Flex gap="2" align="center">
						<span>Category:</span>
						<Badge variant="soft" color="primary" size="1" iconLeft={<UserIcon />}>
							Account
						</Badge>
					</Flex>
					<Flex gap="2" align="center">
						<span>Status:</span>
						<Badge variant="soft" color="info" iconLeft={<CheckIcon />}>
							Verified
						</Badge>
					</Flex>
				</Stack>
			</div>
		</Stack>
	),
};
