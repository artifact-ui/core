import type { Meta, StoryObj } from '@storybook/react';
import * as Modal from './modal';
import { Button } from '../button/button';
import { Text } from '../text/text';
import { useState } from 'react';

const meta: Meta<typeof Modal.Root> = {
	title: 'Overlay/Modal',
	component: Modal.Root,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal.Root>;

export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Modal</Button>
				<Modal.Root open={open} onOpenChange={setOpen}>
					<Modal.Overlay />
					<Modal.Content>
						<Modal.Header>
							<Modal.Title>Collection Details</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Text>View and manage detailed information for this collection.</Text>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="ghost" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button onClick={() => setOpen(false)}>Save Changes</Button>
						</Modal.Footer>
					</Modal.Content>
				</Modal.Root>
			</>
		);
	},
};

export const Simple: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<Button onClick={() => setOpen(true)}>Archive Specimen</Button>
				<Modal.Root open={open} onOpenChange={setOpen}>
					<Modal.Overlay />
					<Modal.Content variant="simple" size="1">
						<Modal.Header showCloseButton={false}>
							<Modal.Title>Archive Specimen?</Modal.Title>
							<Modal.Description>
								This will move the specimen to archived storage.
							</Modal.Description>
						</Modal.Header>
						<Modal.Footer>
							<Button variant="ghost" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button onClick={() => setOpen(false)}>Archive</Button>
						</Modal.Footer>
					</Modal.Content>
				</Modal.Root>
			</>
		);
	},
};

export const Confirmation: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<Button color="danger" onClick={() => setOpen(true)}>
					Delete Collection
				</Button>
				<Modal.Root open={open} onOpenChange={setOpen}>
					<Modal.Overlay />
					<Modal.Content variant="simple" size="1">
						<Modal.Header showCloseButton={false}>
							<Modal.Title>Delete Collection?</Modal.Title>
							<Modal.Description>This action cannot be undone.</Modal.Description>
						</Modal.Header>
						<Modal.Footer>
							<Button variant="ghost" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button color="danger" onClick={() => setOpen(false)}>
								Delete
							</Button>
						</Modal.Footer>
					</Modal.Content>
				</Modal.Root>
			</>
		);
	},
};
