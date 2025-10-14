import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';
import { Stack } from '../layout/stack';
import { Flex } from '../layout/flex';

const meta: Meta<typeof Separator> = {
	title: 'Artifact/Separator',
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
		<Stack gap="6" style={{ padding: '2rem' }}>
			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Sizes
				</h3>
				<Stack gap="5">
					<div>
						<p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
							Size 1 (default)
						</p>
						<Separator size="1" />
					</div>
					<div>
						<p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Size 2</p>
						<Separator size="2" />
					</div>
					<div>
						<p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Size 3</p>
						<Separator size="3" />
					</div>
					<div>
						<p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Size 4</p>
						<Separator size="4" />
					</div>
				</Stack>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
					Orientations
				</h3>
				<Stack gap="5">
					<div>
						<p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
							Horizontal (default)
						</p>
						<Separator orientation="horizontal" />
					</div>
					<div>
						<p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Vertical</p>
						<Flex align="center" gap="4" style={{ height: '100px' }}>
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
