import type { Meta, StoryObj } from '@storybook/react';
import * as Tabs from './tabs';
import { Stack } from '../layout/stack';
import { Text } from '../text/text';
import { useState } from 'react';

const meta: Meta<typeof Tabs.Root> = {
	title: 'Artifact/Tabs',
	component: Tabs.Root,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
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

const WithContentComponent = () => {
	const [activeTab, setActiveTab] = useState('overview');

	return (
		<div style={{ width: '600px' }}>
			<Tabs.Root value={activeTab} onValueChange={setActiveTab}>
				<Tabs.List size="2">
					<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
					<Tabs.Trigger value="specimens">Specimens</Tabs.Trigger>
					<Tabs.Trigger value="metadata">Metadata</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="overview">
					<Stack gap="2">
						<Text weight="medium">Collection Overview</Text>
						<Text size="2" color="secondary">
							Summary of archived specimens and catalog information.
						</Text>
					</Stack>
				</Tabs.Content>
				<Tabs.Content value="specimens">
					<Stack gap="2">
						<Text weight="medium">Specimen List</Text>
						<Text size="2" color="secondary">
							View and manage individual specimens in this collection.
						</Text>
					</Stack>
				</Tabs.Content>
				<Tabs.Content value="metadata">
					<Stack gap="2">
						<Text weight="medium">Collection Metadata</Text>
						<Text size="2" color="secondary">
							Detailed research notes and catalog documentation.
						</Text>
					</Stack>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	);
};

export const WithContent: Story = {
	render: () => <WithContentComponent />,
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

const AllColorsComponent = () => {
	const [activeTab, setActiveTab] = useState('primary');

	return (
		<div style={{ width: '600px' }}>
			<Tabs.Root value={activeTab} onValueChange={setActiveTab}>
				<Tabs.List>
					<Tabs.Trigger value="primary" color="primary">
						Primary
					</Tabs.Trigger>
					<Tabs.Trigger value="neutral" color="neutral">
						Neutral
					</Tabs.Trigger>
					<Tabs.Trigger value="success" color="success">
						Success
					</Tabs.Trigger>
					<Tabs.Trigger value="info" color="info">
						Info
					</Tabs.Trigger>
					<Tabs.Trigger value="danger" color="danger">
						Danger
					</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="primary">
					<Text>Primary tab content</Text>
				</Tabs.Content>
				<Tabs.Content value="neutral">
					<Text>Neutral tab content</Text>
				</Tabs.Content>
				<Tabs.Content value="success">
					<Text>Success tab content</Text>
				</Tabs.Content>
				<Tabs.Content value="info">
					<Text>Info tab content</Text>
				</Tabs.Content>
				<Tabs.Content value="danger">
					<Text>Danger tab content</Text>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	);
};

export const AllColors: Story = {
	render: () => <AllColorsComponent />,
};
