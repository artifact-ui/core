import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';
import { Stack } from '../layout/stack';
import { Flex } from '../layout/flex';
import { Text } from '../text/text';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
	title: 'Alpine/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof Switch>;

const DefaultComponent = () => {
	const [checked, setChecked] = useState(false);
	return <Switch checked={checked} onCheckedChange={setChecked} />;
};

export const Default: Story = {
	render: () => <DefaultComponent />,
};

const ExamplesComponent = () => {
	const [checked1, setChecked1] = useState(false);
	const [checked2, setChecked2] = useState(true);
	const [checked3, setChecked3] = useState(false);
	const [checked4, setChecked4] = useState(false);
	const [checked5, setChecked5] = useState(false);

	return (
		<Stack gap="5" style={{ width: '24rem' }}>
			{/* Sizes */}
			<Stack gap="3">
				<Flex align="center" justify="between">
					<Text size="2">Size 1 (small)</Text>
					<Switch size="1" checked={checked1} onCheckedChange={setChecked1} />
				</Flex>
				<Flex align="center" justify="between">
					<Text size="2">Size 2 (default)</Text>
					<Switch size="2" checked={checked2} onCheckedChange={setChecked2} />
				</Flex>
				<Flex align="center" justify="between">
					<Text size="2">Size 3 (large)</Text>
					<Switch size="3" checked={checked3} onCheckedChange={setChecked3} />
				</Flex>
			</Stack>

			{/* States */}
			<Stack gap="3">
				<Flex align="center" justify="between">
					<Text size="2">Disabled (unchecked)</Text>
					<Switch disabled checked={false} />
				</Flex>
				<Flex align="center" justify="between">
					<Text size="2">Disabled (checked)</Text>
					<Switch disabled checked={true} />
				</Flex>
			</Stack>

			{/* Use Cases */}
			<Stack gap="3">
				<Flex align="center" justify="between">
					<Stack gap="1">
						<label htmlFor="public-switch">
							<Text size="3">Public Pack</Text>
						</label>
						<Text size="2" color="secondary">
							Make your pack visible to others
						</Text>
					</Stack>
					<Switch
						id="public-switch"
						size="3"
						checked={checked4}
						onCheckedChange={setChecked4}
					/>
				</Flex>

				<Flex align="center" justify="between">
					<Stack gap="1">
						<label htmlFor="pricing-switch">
							<Text size="3">Show Pricing</Text>
						</label>
						<Text size="2" color="secondary">
							Display item prices in your pack
						</Text>
					</Stack>
					<Switch
						id="pricing-switch"
						size="3"
						checked={checked5}
						onCheckedChange={setChecked5}
					/>
				</Flex>
			</Stack>
		</Stack>
	);
};

export const Examples: Story = {
	render: () => <ExamplesComponent />,
};
