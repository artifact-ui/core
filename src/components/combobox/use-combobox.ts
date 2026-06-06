import { useState } from 'react';
import { type ComboboxOption } from './combobox';

export interface UseComboboxParams {
	options: ComboboxOption[];
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string | undefined) => void;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
}

/**
 * Headless state for the Combobox: selection, open state, search, and the
 * highlighted (active) option. Kept DOM-free so it can be unit tested on its
 * own; the component handles rendering and scroll-into-view.
 */

export function useCombobox({
	options,
	value,
	defaultValue,
	onValueChange,
	open: openProp,
	defaultOpen,
	onOpenChange,
}: UseComboboxParams) {
	const [internalValue, setInternalValue] = useState(defaultValue);
	const selectedValue = value ?? internalValue;

	const [internalOpen, setInternalOpen] = useState(defaultOpen ?? false);
	const open = openProp ?? internalOpen;

	const [search, setSearch] = useState('');
	const [activeIndex, setActiveIndex] = useState(0);

	const filtered = options.filter((option) =>
		option.label.toLowerCase().includes(search.toLowerCase()),
	);
	const selectedOption = options.find((option) => option.value === selectedValue);

	const setOpen = (next: boolean) => {
		if (openProp === undefined) setInternalOpen(next);
		onOpenChange?.(next);
		if (!next) {
			setSearch('');
			setActiveIndex(0);
		}
	};

	const selectOption = (option: ComboboxOption) => {
		if (option.disabled) return;
		if (value === undefined) setInternalValue(option.value);
		onValueChange?.(option.value);
		setOpen(false);
	};

	const clear = () => {
		if (value === undefined) setInternalValue(undefined);
		onValueChange?.(undefined);
	};

	// Returns the new index so the caller can scroll it into view (no DOM here).
	const moveActive = (delta: number) => {
		if (filtered.length === 0) return activeIndex;
		const next = Math.min(Math.max(activeIndex + delta, 0), filtered.length - 1);
		setActiveIndex(next);
		return next;
	};

	const changeSearch = (next: string) => {
		setSearch(next);
		setActiveIndex(0);
	};

	return {
		open,
		setOpen,
		search,
		changeSearch,
		activeIndex,
		setActiveIndex,
		filtered,
		selectedOption,
		selectedValue,
		selectOption,
		clear,
		moveActive,
	};
}
