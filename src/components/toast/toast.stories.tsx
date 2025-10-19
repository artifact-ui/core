import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProvider } from './toast';
import { Button } from '../button/button';
import { Grid } from '../layout/grid';

const meta: Meta<typeof Toast> = {
	title: 'Feedback/Toast',
	component: Toast,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'info', 'success', 'warning', 'error'],
			description: 'Semantic variant',
		},
	},
	decorators: [
		(Story) => (
			<ToastProvider>
				<div style={{ padding: '4rem' }}>
					<Story />
				</div>
			</ToastProvider>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
	render: () => {
		const [open, setOpen] = React.useState(false);

		return (
			<>
				<Button onClick={() => setOpen(true)}>Show Toast</Button>
				<Toast open={open} onOpenChange={setOpen} title="Notification">
					Your changes have been saved.
				</Toast>
			</>
		);
	},
};

export const AllVariants: Story = {
	render: () => {
		const [openDefault, setOpenDefault] = React.useState(false);
		const [openInfo, setOpenInfo] = React.useState(false);
		const [openSuccess, setOpenSuccess] = React.useState(false);
		const [openWarning, setOpenWarning] = React.useState(false);
		const [openError, setOpenError] = React.useState(false);

		return (
			<div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
				<Button onClick={() => setOpenDefault(true)}>Default</Button>
				<Button onClick={() => setOpenInfo(true)}>Info</Button>
				<Button onClick={() => setOpenSuccess(true)}>Success</Button>
				<Button onClick={() => setOpenWarning(true)}>Warning</Button>
				<Button onClick={() => setOpenError(true)}>Error</Button>

				<Toast
					open={openDefault}
					onOpenChange={setOpenDefault}
					variant="default"
					title="System">
					System notification message.
				</Toast>

				<Toast
					open={openInfo}
					onOpenChange={setOpenInfo}
					variant="info"
					title="Information">
					New updates available for your account.
				</Toast>

				<Toast
					open={openSuccess}
					onOpenChange={setOpenSuccess}
					variant="success"
					title="Success">
					Operation completed successfully.
				</Toast>

				<Toast
					open={openWarning}
					onOpenChange={setOpenWarning}
					variant="warning"
					title="Warning">
					Your session will expire in 5 minutes.
				</Toast>

				<Toast open={openError} onOpenChange={setOpenError} variant="error" title="Error">
					An error occurred during processing.
				</Toast>
			</div>
		);
	},
};

export const WithDescription: Story = {
	render: () => {
		const [open, setOpen] = React.useState(false);

		return (
			<>
				<Button onClick={() => setOpen(true)}>Show Toast with Description</Button>
				<Toast
					open={open}
					onOpenChange={setOpen}
					variant="success"
					title="Payment processed"
					description="Your payment has been successfully processed. Receipt sent to your email."
				/>
			</>
		);
	},
};

export const Positions: Story = {
	decorators: [],
	render: () => {
		const [topLeft, setTopLeft] = React.useState(false);
		const [topCenter, setTopCenter] = React.useState(false);
		const [topRight, setTopRight] = React.useState(false);
		const [bottomLeft, setBottomLeft] = React.useState(false);
		const [bottomCenter, setBottomCenter] = React.useState(false);
		const [bottomRight, setBottomRight] = React.useState(false);

		return (
			<>
				<Grid columns={3} gap="2" style={{ paddingBlock: '3rem' }}>
					<Button onClick={() => setTopLeft(true)}>Top Left</Button>
					<Button onClick={() => setTopCenter(true)}>Top Center</Button>
					<Button onClick={() => setTopRight(true)}>Top Right</Button>
					<Button onClick={() => setBottomLeft(true)}>Bottom Left</Button>
					<Button onClick={() => setBottomCenter(true)}>Bottom Center</Button>
					<Button onClick={() => setBottomRight(true)}>Bottom Right</Button>
				</Grid>

				<ToastProvider position="top-left">
					<Toast open={topLeft} onOpenChange={setTopLeft} title="Top Left">
						Toast positioned at top left.
					</Toast>
				</ToastProvider>

				<ToastProvider position="top-center">
					<Toast open={topCenter} onOpenChange={setTopCenter} title="Top Center">
						Toast positioned at top center.
					</Toast>
				</ToastProvider>

				<ToastProvider position="top-right">
					<Toast open={topRight} onOpenChange={setTopRight} title="Top Right">
						Toast positioned at top right.
					</Toast>
				</ToastProvider>

				<ToastProvider position="bottom-left">
					<Toast open={bottomLeft} onOpenChange={setBottomLeft} title="Bottom Left">
						Toast positioned at bottom left.
					</Toast>
				</ToastProvider>

				<ToastProvider position="bottom-center">
					<Toast open={bottomCenter} onOpenChange={setBottomCenter} title="Bottom Center">
						Toast positioned at bottom center.
					</Toast>
				</ToastProvider>

				<ToastProvider position="bottom-right">
					<Toast open={bottomRight} onOpenChange={setBottomRight} title="Bottom Right">
						Toast positioned at bottom right.
					</Toast>
				</ToastProvider>
			</>
		);
	},
};
