import type { Meta, StoryObj } from '@storybook/react';
import * as Accordion from './accordion';
import { CalendarIcon, UserIcon, InfoIcon } from '../../icons';

const meta: Meta<typeof Accordion.Root> = {
	title: 'Data Display/Accordion',
	component: Accordion.Root,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		collapsible: {
			control: 'boolean',
			description: 'Allow the open item to collapse (single mode)',
		},
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		collapsible: true,
	},
	render: (args) => (
		<Accordion.Root type="single" {...args} style={{ width: '24rem' }}>
			<Accordion.Item value="hours">
				<Accordion.Trigger iconLeft={<CalendarIcon />}>
					Hours & Admission
				</Accordion.Trigger>
				<Accordion.Content>
					Open Tuesday through Sunday, 10am to 5pm. General admission is free for members.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="tours">
				<Accordion.Trigger iconLeft={<UserIcon />}>Guided Tours</Accordion.Trigger>
				<Accordion.Content>
					Docent-led tours run daily at 11am and 2pm, beginning in the Ancient wing.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="accessibility">
				<Accordion.Trigger iconLeft={<InfoIcon />}>Accessibility</Accordion.Trigger>
				<Accordion.Content>
					All galleries are wheelchair accessible. Audio guides are available at the front
					desk.
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	),
};

export const Multiple: Story = {
	render: () => (
		<Accordion.Root type="multiple" style={{ width: '24rem' }}>
			<Accordion.Item value="pottery">
				<Accordion.Trigger>Pottery Collection</Accordion.Trigger>
				<Accordion.Content>
					Neolithic through Bronze Age vessels from the Anatolian plateau.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="textiles">
				<Accordion.Trigger>Textiles Collection</Accordion.Trigger>
				<Accordion.Content>
					Woven fragments and dyed cloth spanning three millennia.
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	),
};
