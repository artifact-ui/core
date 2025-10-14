import type { Meta, StoryObj } from '@storybook/react';
import * as Tabs from './tabs';
import { Stack } from '../layout/stack';
import { Text } from '../text/text';
import { useState } from 'react';

const meta: Meta<typeof Tabs.Root> = {
	title: 'Alpine/Tabs',
	component: Tabs.Root,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof Tabs.Root>;

const DefaultComponent = () => {
	const [activeTab, setActiveTab] = useState('tab1');

	return (
		<div style={{ width: '600px' }}>
			<Tabs.Root value={activeTab} onValueChange={setActiveTab}>
				<Tabs.List>
					<Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
					<Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
					<Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="tab1">
					<Text>Content for Tab 1</Text>
				</Tabs.Content>
				<Tabs.Content value="tab2">
					<Text>Content for Tab 2</Text>
				</Tabs.Content>
				<Tabs.Content value="tab3">
					<Text>Content for Tab 3</Text>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	);
};

export const Default: Story = {
	render: () => <DefaultComponent />,
};

const WithIconsComponent = () => {
	const [activeTab, setActiveTab] = useState('info');

	return (
		<div style={{ width: '600px' }}>
			<Tabs.Root value={activeTab} onValueChange={setActiveTab}>
				<Tabs.List size="2">
					<Tabs.Trigger value="info">Pack Info</Tabs.Trigger>
					<Tabs.Trigger value="settings">Pack Settings</Tabs.Trigger>
					<Tabs.Trigger value="profile">Profile</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="info">
					<Stack gap="2">
						<Text weight="medium">Pack Information</Text>
						<Text size="2" color="secondary">
							Edit your pack name, description, and other details.
						</Text>
					</Stack>
				</Tabs.Content>
				<Tabs.Content value="settings">
					<Stack gap="2">
						<Text weight="medium">Pack Settings</Text>
						<Text size="2" color="secondary">
							Configure pack settings like pricing, affiliate links, and theme.
						</Text>
					</Stack>
				</Tabs.Content>
				<Tabs.Content value="profile">
					<Stack gap="2">
						<Text weight="medium">Profile Settings</Text>
						<Text size="2" color="secondary">
							Manage your profile information and preferences.
						</Text>
					</Stack>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	);
};

export const WithIcons: Story = {
	render: () => <WithIconsComponent />,
};

const SizesComponent = () => {
	const [tab1, setTab1] = useState('a');
	const [tab2, setTab2] = useState('a');
	const [tab3, setTab3] = useState('a');

	return (
		<Stack gap="8" style={{ width: '600px' }}>
			<div>
				<Text size="2" weight="medium" style={{ marginBottom: '0.5rem' }}>
					Size 1 (Small)
				</Text>
				<Tabs.Root value={tab1} onValueChange={setTab1}>
					<Tabs.List size="1">
						<Tabs.Trigger value="a">Tab A</Tabs.Trigger>
						<Tabs.Trigger value="b">Tab B</Tabs.Trigger>
						<Tabs.Trigger value="c">Tab C</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content value="a">
						<Text size="2">Content A</Text>
					</Tabs.Content>
					<Tabs.Content value="b">
						<Text size="2">Content B</Text>
					</Tabs.Content>
					<Tabs.Content value="c">
						<Text size="2">Content C</Text>
					</Tabs.Content>
				</Tabs.Root>
			</div>

			<div>
				<Text size="2" weight="medium" style={{ marginBottom: '0.5rem' }}>
					Size 2 (Default)
				</Text>
				<Tabs.Root value={tab2} onValueChange={setTab2}>
					<Tabs.List size="2">
						<Tabs.Trigger value="a">Tab A</Tabs.Trigger>
						<Tabs.Trigger value="b">Tab B</Tabs.Trigger>
						<Tabs.Trigger value="c">Tab C</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content value="a">
						<Text size="2">Content A</Text>
					</Tabs.Content>
					<Tabs.Content value="b">
						<Text size="2">Content B</Text>
					</Tabs.Content>
					<Tabs.Content value="c">
						<Text size="2">Content C</Text>
					</Tabs.Content>
				</Tabs.Root>
			</div>

			<div>
				<Text size="2" weight="medium" style={{ marginBottom: '0.5rem' }}>
					Size 3 (Large)
				</Text>
				<Tabs.Root value={tab3} onValueChange={setTab3}>
					<Tabs.List size="3">
						<Tabs.Trigger value="a">Tab A</Tabs.Trigger>
						<Tabs.Trigger value="b">Tab B</Tabs.Trigger>
						<Tabs.Trigger value="c">Tab C</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content value="a">
						<Text size="2">Content A</Text>
					</Tabs.Content>
					<Tabs.Content value="b">
						<Text size="2">Content B</Text>
					</Tabs.Content>
					<Tabs.Content value="c">
						<Text size="2">Content C</Text>
					</Tabs.Content>
				</Tabs.Root>
			</div>
		</Stack>
	);
};

export const Sizes: Story = {
	render: () => <SizesComponent />,
};
