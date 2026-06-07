import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import * as RadioGroup from './radio-group';

const renderRadioGroup = (props = {}) =>
	renderComponent(
		<RadioGroup.Root aria-label="Employee of the month" {...props}>
			<RadioGroup.Item value="michael">Michael Scott</RadioGroup.Item>
			<RadioGroup.Item value="jim">Jim Halpert</RadioGroup.Item>
			<RadioGroup.Item value="pam" disabled>
				Pam Beesly
			</RadioGroup.Item>
		</RadioGroup.Root>,
	);

describe('RadioGroup', () => {
	it('renders all radio options', () => {
		renderRadioGroup();

		expect(screen.getAllByRole('radio')).toHaveLength(3);
	});

	it('selects an option on click via its label', async () => {
		const onValueChange = vi.fn();
		const { user } = renderRadioGroup({ onValueChange });

		await user.click(screen.getByText('Jim Halpert'));

		expect(onValueChange).toHaveBeenCalledWith('jim');
	});

	it('reflects the default value as checked', () => {
		renderRadioGroup({ defaultValue: 'michael' });

		expect(screen.getByRole('radio', { name: 'Michael Scott' })).toBeChecked();
	});

	it('does not select a disabled option', async () => {
		const onValueChange = vi.fn();
		const { user } = renderRadioGroup({ onValueChange });

		await user.click(screen.getByText('Pam Beesly'));

		expect(onValueChange).not.toHaveBeenCalled();
	});

	it('renders an error message', () => {
		renderRadioGroup({ error: true, message: 'Selection required' });

		expect(screen.getByText('Selection required')).toBeInTheDocument();
	});
});
