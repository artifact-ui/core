import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Root as Select, Trigger, Content, Item, Value } from './select';

describe('Select', () => {
	describe('Rendering', () => {
		it('renders trigger', () => {
			renderComponent(
				<Select>
					<Trigger>
						<Value placeholder="Select department" />
					</Trigger>
					<Content>
						<Item value="sales">Sales</Item>
					</Content>
				</Select>,
			);

			expect(screen.getByRole('combobox')).toBeInTheDocument();
		});

		it('renders with controlled value', () => {
			renderComponent(
				<Select value="manager">
					<Trigger>
						<Value placeholder="Select position" />
					</Trigger>
					<Content>
						<Item value="manager">Regional Manager</Item>
						<Item value="sales">Sales Representative</Item>
					</Content>
				</Select>,
			);

			expect(screen.getByText('Regional Manager')).toBeInTheDocument();
		});
	});

	describe('Props Pass-Through', () => {
		it('passes onValueChange handler', () => {
			const handleChange = vi.fn();
			renderComponent(
				<Select onValueChange={handleChange}>
					<Trigger>
						<Value placeholder="Choose employee" />
					</Trigger>
					<Content>
						<Item value="jim">Jim Halpert</Item>
					</Content>
				</Select>,
			);

			expect(screen.getByRole('combobox')).toBeInTheDocument();
		});

		it('passes disabled prop', () => {
			renderComponent(
				<Select disabled>
					<Trigger>
						<Value placeholder="Select status" />
					</Trigger>
					<Content>
						<Item value="active">Active</Item>
					</Content>
				</Select>,
			);

			expect(screen.getByRole('combobox')).toBeDisabled();
		});
	});

	describe('Size Prop', () => {
		it('renders with different sizes', () => {
			renderComponent(
				<Select size="1">
					<Trigger>
						<Value placeholder="Small select" />
					</Trigger>
					<Content>
						<Item value="option">Option</Item>
					</Content>
				</Select>,
			);

			expect(screen.getByRole('combobox')).toBeInTheDocument();
		});
	});

	describe('Error State', () => {
		it('displays error message when error prop is true', () => {
			renderComponent(
				<Select error message="Please select a department">
					<Trigger>
						<Value placeholder="Select department" />
					</Trigger>
					<Content>
						<Item value="sales">Sales</Item>
					</Content>
				</Select>,
			);

			expect(screen.getByText('Please select a department')).toBeInTheDocument();
		});

		it('does not display error message when error is false', () => {
			renderComponent(
				<Select error={false} message="Please select a department">
					<Trigger>
						<Value placeholder="Select department" />
					</Trigger>
					<Content>
						<Item value="sales">Sales</Item>
					</Content>
				</Select>,
			);

			expect(screen.queryByText('Please select a department')).not.toBeInTheDocument();
		});
	});
});
