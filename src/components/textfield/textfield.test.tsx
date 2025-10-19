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

	describe('Prefix and Suffix', () => {
		it('renders with text prefix', () => {
			renderComponent(
				<Form.Root>
					<TextField
						name="price"
						label="Price"
						variant="icon"
						prefix={<span data-testid="prefix">$</span>}
					/>
				</Form.Root>,
			);

			expect(screen.getByTestId('prefix')).toBeInTheDocument();
			expect(screen.getByTestId('prefix')).toHaveTextContent('$');
		});

		it('renders with text suffix', () => {
			renderComponent(
				<Form.Root>
					<TextField
						name="weight"
						label="Weight"
						variant="icon"
						suffix={<span data-testid="suffix">kg</span>}
					/>
				</Form.Root>,
			);

			expect(screen.getByTestId('suffix')).toBeInTheDocument();
			expect(screen.getByTestId('suffix')).toHaveTextContent('kg');
		});

		it('renders with both prefix and suffix', () => {
			renderComponent(
				<Form.Root>
					<TextField
						name="amount"
						label="Amount"
						variant="icon"
						prefix={<span data-testid="prefix">$</span>}
						suffix={<span data-testid="suffix">USD</span>}
					/>
				</Form.Root>,
			);

			expect(screen.getByTestId('prefix')).toBeInTheDocument();
			expect(screen.getByTestId('suffix')).toBeInTheDocument();
		});
	});

	describe('Clearable', () => {
		it('renders clear button when clearable prop is true', () => {
			renderComponent(
				<Form.Root>
					<TextField
						name="search"
						label="Search"
						variant="icon"
						clearable
						onClear={vi.fn()}
					/>
				</Form.Root>,
			);

			expect(screen.getByRole('button', { name: /clear input/i })).toBeInTheDocument();
		});

		it('calls onClear when clear button is clicked', async () => {
			const handleClear = vi.fn();
			const { user } = renderComponent(
				<Form.Root>
					<TextField
						name="search"
						label="Search"
						variant="icon"
						clearable
						onClear={handleClear}
					/>
				</Form.Root>,
			);

			const clearButton = screen.getByRole('button', { name: /clear input/i });
			await user.click(clearButton);

			expect(handleClear).toHaveBeenCalledTimes(1);
		});

		it('does not render clear button when onClear is not provided', () => {
			renderComponent(
				<Form.Root>
					<TextField name="search" label="Search" variant="icon" clearable />
				</Form.Root>,
			);

			expect(
				screen.queryByRole('button', { name: /clear input/i }),
			).not.toBeInTheDocument();
		});
	});
});
