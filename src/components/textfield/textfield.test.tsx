import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Input as TextField, Standalone } from './textfield';
import { Form } from 'radix-ui';
import { SearchIcon, CheckIcon } from '@/icons';

describe('TextField', () => {
	describe('Input (Form Integration)', () => {
		it('renders with label and message', () => {
			renderComponent(
				<Form.Root>
					<TextField
						name="username"
						label="Username"
						message="Enter your Dunder Mifflin username"
					/>
				</Form.Root>,
			);

			expect(screen.getByLabelText('Username')).toBeInTheDocument();
			expect(screen.getByText('Enter your Dunder Mifflin username')).toBeInTheDocument();
		});

		it('calls onChange when typing', async () => {
			const handleChange = vi.fn();
			const { user } = renderComponent(
				<Form.Root>
					<TextField name="email" label="Email" onChange={handleChange} />
				</Form.Root>,
			);

			const input = screen.getByLabelText('Email');
			await user.type(input, 'jim@dundermifflin.com');

			expect(handleChange).toHaveBeenCalled();
		});

		it('accepts different input types', () => {
			renderComponent(
				<Form.Root>
					<TextField name="password" label="Password" type="password" />
				</Form.Root>,
			);

			const input = screen.getByLabelText('Password');
			expect(input).toHaveAttribute('type', 'password');
		});

		it('displays error state', () => {
			renderComponent(
				<Form.Root>
					<TextField
						name="email"
						label="Email"
						error={{ error: true, message: 'Please enter a valid email' }}
					/>
				</Form.Root>,
			);

			expect(screen.getByLabelText('Email')).toBeInTheDocument();
		});

		it('throws error when name is missing', () => {
			expect(() => {
				renderComponent(
					<Form.Root>
						<TextField label="Invalid" />
					</Form.Root>,
				);
			}).toThrow('TextField requires a name prop');
		});
	});

	describe('Icon Variant', () => {
		it('renders with left icon', () => {
			renderComponent(
				<Form.Root>
					<TextField
						name="search"
						label="Search"
						variant="icon"
						iconLeft={<SearchIcon data-testid="search-icon" />}
					/>
				</Form.Root>,
			);

			expect(screen.getByTestId('search-icon')).toBeInTheDocument();
			expect(screen.getByLabelText('Search')).toBeInTheDocument();
		});

		it('renders with right icon', () => {
			renderComponent(
				<Form.Root>
					<TextField
						name="verified"
						label="Verification Code"
						variant="icon"
						iconRight={<CheckIcon data-testid="check-icon" />}
					/>
				</Form.Root>,
			);

			expect(screen.getByTestId('check-icon')).toBeInTheDocument();
			expect(screen.getByLabelText('Verification Code')).toBeInTheDocument();
		});

		it('renders with both icons', () => {
			renderComponent(
				<Form.Root>
					<TextField
						name="employee-search"
						label="Employee Search"
						variant="icon"
						iconLeft={<SearchIcon data-testid="left-icon" />}
						iconRight={<CheckIcon data-testid="right-icon" />}
					/>
				</Form.Root>,
			);

			expect(screen.getByTestId('left-icon')).toBeInTheDocument();
			expect(screen.getByTestId('right-icon')).toBeInTheDocument();
		});
	});

	describe('Standalone', () => {
		it('renders without form context', () => {
			renderComponent(<Standalone placeholder="Enter department name" />);

			expect(screen.getByPlaceholderText('Enter department name')).toBeInTheDocument();
		});

		it('calls onChange when typing', async () => {
			const handleChange = vi.fn();
			const { user } = renderComponent(
				<Standalone
					placeholder="Type here"
					onChange={handleChange}
					aria-label="Quick input"
				/>,
			);

			const input = screen.getByLabelText('Quick input');
			await user.type(input, 'Sales');

			expect(handleChange).toHaveBeenCalled();
		});

		it('renders with icon variant', () => {
			renderComponent(
				<Standalone
					variant="icon"
					iconLeft={<SearchIcon data-testid="standalone-icon" />}
					placeholder="Search employees"
					aria-label="Search"
				/>,
			);

			expect(screen.getByTestId('standalone-icon')).toBeInTheDocument();
			expect(screen.getByLabelText('Search')).toBeInTheDocument();
		});
	});

	describe('Props', () => {
		it('renders with different sizes', () => {
			renderComponent(
				<Form.Root>
					<TextField name="small" label="Small" size="1" />
				</Form.Root>,
			);

			expect(screen.getByLabelText('Small')).toBeInTheDocument();
		});

		it('renders with minimal variant', () => {
			renderComponent(
				<Form.Root>
					<TextField name="minimal" label="Minimal Input" variant="minimal" />
				</Form.Root>,
			);

			expect(screen.getByLabelText('Minimal Input')).toBeInTheDocument();
		});

		it('renders with custom width', () => {
			renderComponent(
				<Form.Root>
					<TextField name="custom" label="Custom Width" width="400px" />
				</Form.Root>,
			);

			expect(screen.getByLabelText('Custom Width')).toBeInTheDocument();
		});
	});
});
