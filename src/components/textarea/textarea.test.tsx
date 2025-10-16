import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Input as TextArea, Standalone } from './textarea';
import { Form } from 'radix-ui';

describe('TextArea', () => {
	describe('Input (Form Integration)', () => {
		it('renders with label and message', () => {
			renderComponent(
				<Form.Root>
					<TextArea
						name="feedback"
						label="Employee Feedback"
						message="Share your thoughts on the quarterly review"
					/>
				</Form.Root>,
			);

			expect(screen.getByLabelText('Employee Feedback')).toBeInTheDocument();
			expect(
				screen.getByText('Share your thoughts on the quarterly review'),
			).toBeInTheDocument();
		});

		it('calls onChange when typing', async () => {
			const handleChange = vi.fn();
			const { user } = renderComponent(
				<Form.Root>
					<TextArea name="notes" label="Meeting Notes" onChange={handleChange} />
				</Form.Root>,
			);

			const textarea = screen.getByLabelText('Meeting Notes');
			await user.type(textarea, 'Discussed Q4 goals');

			expect(handleChange).toHaveBeenCalled();
		});

		it('displays error state', () => {
			renderComponent(
				<Form.Root>
					<TextArea
						name="description"
						label="Project Description"
						error={{ error: true, message: 'Description must be at least 10 characters' }}
					/>
				</Form.Root>,
			);

			expect(screen.getByLabelText('Project Description')).toBeInTheDocument();
		});

		it('accepts FormError object', () => {
			renderComponent(
				<Form.Root>
					<TextArea
						name="reason"
						label="Absence Reason"
						error={{
							error: true,
							message: 'Please provide a reason for your absence',
						}}
					/>
				</Form.Root>,
			);

			expect(screen.getByLabelText('Absence Reason')).toBeInTheDocument();
		});

		it('throws error when name is missing', () => {
			expect(() => {
				renderComponent(
					<Form.Root>
						<TextArea label="Invalid" />
					</Form.Root>,
				);
			}).toThrow('TextArea requires a name value');
		});

		it('handles required validation', () => {
			renderComponent(
				<Form.Root>
					<TextArea
						name="comments"
						label="Comments"
						required
						message="This field is required"
						match="valueMissing"
					/>
				</Form.Root>,
			);

			const textarea = screen.getByLabelText('Comments');
			expect(textarea).toHaveAttribute('required');
		});
	});

	describe('Standalone', () => {
		it('renders without form context', () => {
			renderComponent(<Standalone placeholder="Enter branch location notes" />);

			expect(
				screen.getByPlaceholderText('Enter branch location notes'),
			).toBeInTheDocument();
		});

		it('calls onChange when typing', async () => {
			const handleChange = vi.fn();
			const { user } = renderComponent(
				<Standalone
					placeholder="Type here"
					onChange={handleChange}
					aria-label="Quick notes"
				/>,
			);

			const textarea = screen.getByLabelText('Quick notes');
			await user.type(textarea, 'Notes');

			expect(handleChange).toHaveBeenCalled();
		});

		it('displays error state', () => {
			renderComponent(<Standalone error aria-label="Notes" />);

			const textarea = screen.getByLabelText('Notes');
			expect(textarea).toBeInTheDocument();
		});
	});

	describe('Props', () => {
		it('renders with rows prop', () => {
			renderComponent(
				<Form.Root>
					<TextArea name="description" label="Description" rows={10} />
				</Form.Root>,
			);

			const textarea = screen.getByLabelText('Description');
			expect(textarea).toHaveAttribute('rows', '10');
		});

		it('renders with custom dimensions', () => {
			renderComponent(
				<Form.Root>
					<TextArea name="content" label="Content" width="600px" height="300px" />
				</Form.Root>,
			);

			expect(screen.getByLabelText('Content')).toBeInTheDocument();
		});
	});
});
