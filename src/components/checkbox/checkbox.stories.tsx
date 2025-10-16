import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { Text } from '../text/text';
import { Heading } from '../heading/heading';
import { Stack } from '../layout/stack';

const meta = {
	title: 'Artifact/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Examples: Story = {
	render: () => (
		<Stack gap="6" style={{ maxWidth: '500px' }}>
			{/* Default */}
			<Stack gap="2">
				<Heading size="3">Default</Heading>
				<label
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem',
						cursor: 'pointer',
					}}>
					<Checkbox id="default" />
					<Text as="span" size="3">
						Accept terms and conditions
					</Text>
				</label>
			</Stack>

			{/* Checked */}
			<Stack gap="2">
				<Heading size="3">Checked</Heading>
				<label
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem',
						cursor: 'pointer',
					}}>
					<Checkbox id="checked" defaultChecked />
					<Text as="span" size="3">
						I agree to the terms
					</Text>
				</label>
			</Stack>

			{/* Disabled */}
			<Stack gap="2">
				<Heading size="3">Disabled</Heading>
				<Stack gap="3">
					<label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
						<Checkbox id="disabled" disabled />
						<Text as="span" size="3" color="tertiary">
							Disabled unchecked
						</Text>
					</label>
					<label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
						<Checkbox id="disabled-checked" disabled defaultChecked />
						<Text as="span" size="3" color="tertiary">
							Disabled checked
						</Text>
					</label>
				</Stack>
			</Stack>

			{/* Multiple */}
			<Stack gap="2">
				<Heading size="3">Multiple</Heading>
				<Stack gap="3">
					<label
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
							cursor: 'pointer',
						}}>
						<Checkbox id="option1" defaultChecked />
						<Text as="span" size="3">
							Email notifications
						</Text>
					</label>
					<label
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
							cursor: 'pointer',
						}}>
						<Checkbox id="option2" />
						<Text as="span" size="3">
							SMS notifications
						</Text>
					</label>
					<label
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
							cursor: 'pointer',
						}}>
						<Checkbox id="option3" defaultChecked />
						<Text as="span" size="3">
							Push notifications
						</Text>
					</label>
				</Stack>
			</Stack>

			{/* Sizes */}
			<Stack gap="2">
				<Heading size="3">Sizes</Heading>
				<Stack gap="4">
					<label
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
							cursor: 'pointer',
						}}>
						<Checkbox id="size1" size="1" defaultChecked />
						<Text as="span" size="2">
							Size 1 (default) - For compact UI and legal text
						</Text>
					</label>
					<label
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
							cursor: 'pointer',
						}}>
						<Checkbox id="size2" size="2" defaultChecked />
						<Text as="span" size="4">
							Size 2 - For todos and task lists
						</Text>
					</label>
				</Stack>
			</Stack>
		</Stack>
	),
};
