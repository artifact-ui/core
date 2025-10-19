import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { IconButton } from './icon-button';
import { CloseIcon, SearchIcon } from '@/icons';

describe('IconButton', () => {
	it('calls onClick when clicked', async () => {
		const handleClick = vi.fn();
		const { user } = renderComponent(
			<IconButton icon={<SearchIcon />} label="Search items" onClick={handleClick} />,
		);

		await user.click(screen.getByRole('button', { name: /search items/i }));

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('does not call onClick when disabled', async () => {
		const handleClick = vi.fn();
		const { user } = renderComponent(
			<IconButton
				icon={<SearchIcon />}
				label="Search items"
				onClick={handleClick}
				disabled
			/>,
		);

		await user.click(screen.getByRole('button', { name: /search items/i }));

		expect(handleClick).not.toHaveBeenCalled();
	});

	it('has accessible name from label prop', () => {
		renderComponent(<IconButton icon={<CloseIcon />} label="Close modal" />);

		expect(screen.getByRole('button')).toHaveAccessibleName('Close modal');
	});
});
