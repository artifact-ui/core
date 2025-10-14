import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';
import { Stack, Flex } from '@/components/layout';

const meta: Meta<typeof Separator> = {
	title: 'Alpine/Separator',
	component: Separator,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Examples: Story = {
	render: () => (
		<Stack className="gap-8 p-6">
			<div>
				<h3 className="mb-4 text-lg font-semibold">Sizes</h3>
				<Stack className="gap-6">
					<div>
						<p className="mb-2 text-sm">Size 1 (default)</p>
						<Separator size="1" />
					</div>
					<div>
						<p className="mb-2 text-sm">Size 2</p>
						<Separator size="2" />
					</div>
					<div>
						<p className="mb-2 text-sm">Size 3</p>
						<Separator size="3" />
					</div>
					<div>
						<p className="mb-2 text-sm">Size 4</p>
						<Separator size="4" />
					</div>
				</Stack>
			</div>

			<div>
				<h3 className="mb-4 text-lg font-semibold">Orientations</h3>
				<Stack className="gap-6">
					<div>
						<p className="mb-2 text-sm">Horizontal (default)</p>
						<Separator orientation="horizontal" />
					</div>
					<div>
						<p className="mb-2 text-sm">Vertical</p>
						<Flex className="items-center gap-4" style={{ height: '100px' }}>
							<span>Content</span>
							<Separator orientation="vertical" />
							<span>More content</span>
						</Flex>
					</div>
				</Stack>
			</div>
		</Stack>
	),
};