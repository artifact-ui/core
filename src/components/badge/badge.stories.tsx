import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Stack, Flex } from '@/components/layout';
import { LocationIcon, CheckIcon, FavoriteIcon } from '@/components/icons';

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
		<Stack className="gap-8 p-6">
			<div>
				<h3 className="mb-4 text-lg font-semibold">Variants</h3>
				<Flex className="gap-4 items-center">
					<Badge variant="solid">Solid</Badge>
					<Badge variant="soft">Soft</Badge>
					<Badge variant="outline">Outline</Badge>
				</Flex>
			</div>

			<div>
				<h3 className="mb-4 text-lg font-semibold">Colors</h3>
				<Stack className="gap-4">
					<Flex className="gap-2 items-center">
						<Badge color="primary">Primary</Badge>
						<Badge color="secondary">Secondary</Badge>
						<Badge color="tertiary">Tertiary</Badge>
					</Flex>
					<Flex className="gap-2 items-center">
						<Badge color="brand">Brand</Badge>
						<Badge color="info">Info</Badge>
						<Badge color="error">Error</Badge>
					</Flex>
				</Stack>
			</div>

			<div>
				<h3 className="mb-4 text-lg font-semibold">Sizes</h3>
				<Flex className="gap-4 items-center">
					<Badge size="1">Size 1 (xs)</Badge>
					<Badge size="2">Size 2</Badge>
					<Badge size="3">Size 3 (default)</Badge>
					<Badge size="4">Size 4 (lg)</Badge>
				</Flex>
			</div>

			<div>
				<h3 className="mb-4 text-lg font-semibold">Radius</h3>
				<Flex className="gap-4 items-center">
					<Badge radius="1">Default</Badge>
					<Badge radius="2">Large</Badge>
					<Badge radius="full">Full</Badge>
				</Flex>
			</div>

			<div>
				<h3 className="mb-4 text-lg font-semibold">High Contrast</h3>
				<Flex className="gap-4 items-center">
					<Badge>Normal</Badge>
					<Badge highContrast>High Contrast</Badge>
				</Flex>
			</div>

			<div>
				<h3 className="mb-4 text-lg font-semibold">Icons</h3>
				<Stack className="gap-4">
					<Flex className="gap-2 items-center">
						<Badge iconLeft={<LocationIcon size={14} />}>Mountain</Badge>
						<Badge iconRight={<CheckIcon size={14} />}>Completed</Badge>
						<Badge iconLeft={<FavoriteIcon size={14} />} iconRight={<CheckIcon size={14} />}>Featured</Badge>
					</Flex>
				</Stack>
			</div>

			<div>
				<h3 className="mb-4 text-lg font-semibold">Icon Gap</h3>
				<Stack className="gap-4">
					<Flex className="gap-2 items-center">
						<Badge iconLeft={<LocationIcon size={14} />}>Default</Badge>
						<Badge iconLeft={<LocationIcon size={14} />} iconGap="2">Gap 2</Badge>
						<Badge iconLeft={<LocationIcon size={14} />} iconGap="4">Gap 4</Badge>
						<Badge iconLeft={<LocationIcon size={14} />} iconGap="6">Gap 6</Badge>
					</Flex>
				</Stack>
			</div>

			<div>
				<h3 className="mb-4 text-lg font-semibold">Use Cases</h3>
				<Stack className="gap-4">
					<Flex className="gap-2 items-center">
						<span>Item Count:</span>
						<Badge variant="solid" color="secondary" radius="full">24</Badge>
					</Flex>
					<Flex className="gap-2 items-center">
						<span>Quantity:</span>
						<Badge variant="solid" color="secondary" radius="full">x 3</Badge>
					</Flex>
					<Flex className="gap-2 items-center">
						<span>Weight:</span>
						<Badge variant="outline" color="tertiary">2.5 lbs</Badge>
					</Flex>
					<Flex className="gap-2 items-center">
						<span>Category:</span>
						<Badge variant="soft" color="brand" size="1" iconLeft={<LocationIcon size={12} />}>Shelter</Badge>
					</Flex>
					<Flex className="gap-2 items-center">
						<span>Trail Status:</span>
						<Badge variant="soft" color="info" iconLeft={<CheckIcon size={12} />}>Completed</Badge>
					</Flex>
				</Stack>
			</div>
		</Stack>
	),
};