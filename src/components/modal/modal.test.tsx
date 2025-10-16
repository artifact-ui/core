import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import {
	Root as Modal,
	Content,
	Header,
	Title,
	Description,
	Body,
	Footer,
} from './modal';
import { Button } from '../button/button';

describe('Modal', () => {
	describe('Opening and Closing', () => {
		it('displays modal when open is true', () => {
			renderComponent(
				<Modal open={true}>
					<Content>
						<Title>Employee Review</Title>
						<Description>Complete the quarterly employee review form</Description>
					</Content>
				</Modal>,
			);

			expect(screen.getByText('Employee Review')).toBeInTheDocument();
			expect(
				screen.getByText('Complete the quarterly employee review form'),
			).toBeInTheDocument();
		});

		it('does not display modal when open is false', () => {
			renderComponent(
				<Modal open={false}>
					<Content>
						<Title>Employee Review</Title>
					</Content>
				</Modal>,
			);

			expect(screen.queryByText('Employee Review')).not.toBeInTheDocument();
		});

		it('calls onOpenChange when close button is clicked', async () => {
			const handleOpenChange = vi.fn();
			const { user } = renderComponent(
				<Modal open={true} onOpenChange={handleOpenChange}>
					<Content>
						<Header>
							<Title>Confirm Deletion</Title>
						</Header>
					</Content>
				</Modal>,
			);

			await user.click(screen.getByRole('button', { name: /close modal/i }));

			expect(handleOpenChange).toHaveBeenCalledWith(false);
		});

		it('closes modal when Escape key is pressed', async () => {
			const handleOpenChange = vi.fn();
			const { user } = renderComponent(
				<Modal open={true} onOpenChange={handleOpenChange}>
					<Content>
						<Title>Settings</Title>
					</Content>
				</Modal>,
			);

			await user.keyboard('{Escape}');

			expect(handleOpenChange).toHaveBeenCalledWith(false);
		});
	});

	describe('Compound Structure', () => {
		it('renders modal with Header, Title, Body, and Footer', () => {
			renderComponent(
				<Modal open={true}>
					<Content>
						<Header>
							<Title>Submit Expense Report</Title>
						</Header>
						<Body>
							<Description>Review your expense report before submitting</Description>
						</Body>
						<Footer>
							<Button>Submit</Button>
						</Footer>
					</Content>
				</Modal>,
			);

			expect(screen.getByText('Submit Expense Report')).toBeInTheDocument();
			expect(
				screen.getByText('Review your expense report before submitting'),
			).toBeInTheDocument();
			expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
		});
	});

	describe('Size Prop', () => {
		it('renders with different sizes', () => {
			renderComponent(
				<Modal open={true}>
					<Content size="1">
						<Title>Notification</Title>
					</Content>
				</Modal>,
			);

			expect(screen.getByText('Notification')).toBeInTheDocument();
		});
	});

	describe('Variant Prop', () => {
		it('renders with simple variant', () => {
			renderComponent(
				<Modal open={true}>
					<Content variant="simple">
						<Title>Quick Message</Title>
					</Content>
				</Modal>,
			);

			expect(screen.getByText('Quick Message')).toBeInTheDocument();
		});
	});
});
