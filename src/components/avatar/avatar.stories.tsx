import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';
import { UserIcon } from '../../icons';
import { Text } from '../text/text';
import { Flex } from '../layout/flex';
import { Stack } from '../layout/stack';

const meta = {
	title: 'Data Display/Avatar',
	component: Avatar,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop',
		alt: 'Curator avatar',
		size: '3',
	},
};

export const WithInitials: Story = {
	args: {
		fallback: 'DR',
		size: '3',
	},
};

export const WithIcon: Story = {
	args: {
		fallback: <UserIcon />,
		size: '3',
	},
};

export const AllSizes: Story = {
	render: () => (
		<Flex gap="4" align="center">
			<Avatar
				src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
				size="1"
			/>
			<Avatar
				src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop"
				size="2"
			/>
			<Avatar
				src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
				size="3"
			/>
			<Avatar
				src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=150&h=150&fit=crop"
				size="4"
			/>
			<Avatar
				src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
				size="5"
			/>
		</Flex>
	),
};

export const Circle: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop',
		shape: 'circle',
		size: '4',
	},
};

export const Square: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=150&h=150&fit=crop',
		shape: 'square',
		size: '4',
	},
};

export const CommentExample: Story = {
	render: () => (
		<Flex gap="2" align="center">
			<Avatar
				src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop"
				size="3"
			/>
			<Stack gap="1">
				<Text weight="medium" size="3">
					Dr. Elena Rodriguez
				</Text>
				<Text color="secondary" size="2">
					Excellent cataloging work on the pottery collection.
				</Text>
			</Stack>
		</Flex>
	),
};

export const CuratorList: Story = {
	render: () => (
		<Stack gap="3">
			{[
				{
					name: 'Dr. Sarah Chen',
					initials: 'SC',
					src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop',
				},
				{
					name: 'Prof. Marcus Webb',
					initials: 'MW',
					src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop',
				},
				{
					name: 'Dr. Petra Novak',
					initials: 'PN',
					src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
				},
			].map((curator, i) => (
				<Flex key={i} gap="3" align="center">
					<Avatar src={curator.src} size="3" />
					<Text weight="medium">{curator.name}</Text>
				</Flex>
			))}
		</Stack>
	),
};
