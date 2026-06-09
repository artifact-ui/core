import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Combobox, type ComboboxOption } from './combobox';

const options: ComboboxOption[] = [
	{ label: 'Michael Scott', value: 'michael' },
	{ label: 'Jim Halpert', value: 'jim' },
	{ label: 'Pam Beesly', value: 'pam' },
	{ label: 'Dwight Schrute', value: 'dwight' },
];

const renderCombobox = () =>
	renderComponent(<Combobox options={options} placeholder="Select coworker..." />);

describe('Combobox', () => {
	it('renders the trigger with placeholder text', () => {
		renderCombobox();

		expect(
			screen.getByRole('button', { name: /select coworker/i }),
		).toBeInTheDocument();
	});

	it('opens the listbox with all options when clicked', async () => {
		const { user } = renderCombobox();

		await user.click(screen.getByRole('button', { name: /select coworker/i }));

		expect(screen.getByRole('listbox')).toBeInTheDocument();
		expect(screen.getAllByRole('option')).toHaveLength(options.length);
	});

	it('filters the rendered options as the user types', async () => {
		const { user } = renderCombobox();

		await user.click(screen.getByRole('button', { name: /select coworker/i }));
		await user.type(screen.getByPlaceholderText(/search/i), 'jim');

		expect(screen.getByRole('option', { name: 'Jim Halpert' })).toBeInTheDocument();
		expect(screen.queryByRole('option', { name: 'Michael Scott' })).not.toBeInTheDocument();
	});

	it('selects an option on click and reflects it in the trigger', async () => {
		const { user } = renderCombobox();

		await user.click(screen.getByRole('button', { name: /select coworker/i }));
		await user.click(screen.getByRole('option', { name: 'Pam Beesly' }));

		expect(screen.getByRole('button', { name: /pam beesly/i })).toBeInTheDocument();
	});

	it('clears the selection via the clear button', async () => {
		const { user } = renderComponent(
			<Combobox
				options={options}
				placeholder="Select coworker..."
				clearable
				defaultValue="pam"
			/>,
		);

		expect(screen.getByRole('button', { name: /pam beesly/i })).toBeInTheDocument();

		await user.click(screen.getByRole('button', { name: 'Clear selection' }));

		expect(
			screen.getByRole('button', { name: /select coworker/i }),
		).toBeInTheDocument();
	});

	it('shows the empty message when nothing matches', async () => {
		const { user } = renderCombobox();

		await user.click(screen.getByRole('button', { name: /select coworker/i }));
		await user.type(screen.getByPlaceholderText(/search/i), 'zzz');

		expect(screen.getByText(/no results found/i)).toBeInTheDocument();
	});
});
