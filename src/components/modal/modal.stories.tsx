import type { Meta, StoryObj } from '@storybook/react';
import * as Modal from './modal';
import { Button } from '../button/button';
import { Stack } from '../layout/stack';

const meta: Meta<typeof Modal.Root> = {
	title: 'Artifact/Modal',
	component: Modal.Root,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof Modal.Root>;

export const Open: Story = {
	render: () => (
		<Modal.Root open={true} onOpenChange={() => {}}>
			<Modal.Overlay />
			<Modal.Content>
				<Modal.Header>
					<Modal.Title>Example Modal</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Modal.Description>This is a basic modal example.</Modal.Description>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="ghost">Cancel</Button>
					<Button>Confirm</Button>
				</Modal.Footer>
			</Modal.Content>
		</Modal.Root>
	),
};

export const Simple: Story = {
	render: () => (
		<Modal.Root open={true} onOpenChange={() => {}}>
			<Modal.Overlay />
			<Modal.Content variant="simple" size="1">
				<Modal.Header showCloseButton={false}>
					<Modal.Title>Delete Item?</Modal.Title>
					<Modal.Description>This action cannot be undone.</Modal.Description>
				</Modal.Header>
				<Modal.Footer>
					<Button variant="ghost">Cancel</Button>
					<Button color="danger">Delete</Button>
				</Modal.Footer>
			</Modal.Content>
		</Modal.Root>
	),
};

export const SimpleWithForm: Story = {
	render: () => (
		<Modal.Root open={true} onOpenChange={() => {}}>
			<Modal.Overlay />
			<Modal.Content variant="simple">
				<Modal.Header>
					<Modal.Title>Move Item</Modal.Title>
					<Modal.Description>
						Select a pack and category to move this item.
					</Modal.Description>
				</Modal.Header>
				<Modal.Body>
					<Stack gap="4">
						<div>
							<label htmlFor="pack">Pack</label>
							<select
								id="pack"
								style={{
									width: '100%',
									padding: '0.5rem',
									border: '1px solid #ccc',
									borderRadius: '4px',
								}}>
								<option>Choose a pack...</option>
							</select>
						</div>
						<div>
							<label htmlFor="category">Category</label>
							<select
								id="category"
								style={{
									width: '100%',
									padding: '0.5rem',
									border: '1px solid #ccc',
									borderRadius: '4px',
								}}>
								<option>Choose a category...</option>
							</select>
						</div>
					</Stack>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="ghost">Cancel</Button>
					<Button>Move Item</Button>
				</Modal.Footer>
			</Modal.Content>
		</Modal.Root>
	),
};

export const Closed: Story = {
	render: () => (
		<>
			<Button>Open Modal</Button>
			<Modal.Root open={false} onOpenChange={() => {}}>
				<Modal.Overlay />
				<Modal.Content>
					<Modal.Header>
						<Modal.Title>Example Modal</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Modal.Description>This is a basic modal example.</Modal.Description>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="ghost">Cancel</Button>
						<Button>Confirm</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Root>
		</>
	),
};
