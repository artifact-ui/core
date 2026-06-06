import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCombobox } from './use-combobox';
import { type ComboboxOption } from './combobox';

const options: ComboboxOption[] = [
	{ label: 'Michael Scott', value: 'michael' },
	{ label: 'Jim Halpert', value: 'jim' },
	{ label: 'Pam Beesly', value: 'pam' },
	{ label: 'Dwight Schrute', value: 'dwight', disabled: true },
];

describe('useCombobox', () => {
	it('filters options by label (case-insensitive)', () => {
		const { result } = renderHook(() => useCombobox({ options }));

		act(() => result.current.changeSearch('JIM'));

		expect(result.current.filtered).toHaveLength(1);
		expect(result.current.filtered[0].value).toBe('jim');
	});

	it('clamps the active index at both ends', () => {
		const { result } = renderHook(() => useCombobox({ options }));

		act(() => {
			result.current.moveActive(-1);
		});
		expect(result.current.activeIndex).toBe(0);

		act(() => {
			result.current.moveActive(99);
		});
		expect(result.current.activeIndex).toBe(options.length - 1);
	});

	it('selects an option, updating value and closing', () => {
		const { result } = renderHook(() => useCombobox({ options, defaultOpen: true }));

		act(() => result.current.selectOption(options[2]));

		expect(result.current.selectedValue).toBe('pam');
		expect(result.current.open).toBe(false);
	});

	it('ignores selection of a disabled option', () => {
		const { result } = renderHook(() => useCombobox({ options, defaultOpen: true }));

		act(() => result.current.selectOption(options[3]));

		expect(result.current.selectedValue).toBeUndefined();
		expect(result.current.open).toBe(true);
	});

	it('resets search and active index when closed', () => {
		const { result } = renderHook(() => useCombobox({ options, defaultOpen: true }));

		act(() => {
			result.current.changeSearch('pam');
			result.current.moveActive(1);
		});
		act(() => result.current.setOpen(false));

		expect(result.current.search).toBe('');
		expect(result.current.activeIndex).toBe(0);
	});

	it('clears the selection to undefined', () => {
		const onValueChange = vi.fn();
		const { result } = renderHook(() =>
			useCombobox({ options, defaultValue: 'pam', onValueChange }),
		);

		expect(result.current.selectedValue).toBe('pam');

		act(() => result.current.clear());

		expect(result.current.selectedValue).toBeUndefined();
		expect(onValueChange).toHaveBeenCalledWith(undefined);
	});

	it('respects a controlled value', () => {
		const onValueChange = vi.fn();
		const { result } = renderHook(() =>
			useCombobox({ options, value: 'jim', onValueChange }),
		);

		expect(result.current.selectedOption?.value).toBe('jim');

		act(() => result.current.selectOption(options[0]));

		expect(onValueChange).toHaveBeenCalledWith('michael');
		expect(result.current.selectedValue).toBe('jim');
	});
});
