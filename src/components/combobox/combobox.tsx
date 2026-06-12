import React, { useId } from 'react';
import { cn } from '../../utils/cn';
import { type Radius } from '../../types/style-props';
import { type FormError } from '../../types/form-types';
import { getErrorState, getErrorMessage } from '../../utils/form-error-helpers';
import { radiusClasses } from '../../styles/shared/shared-styles';
import { ChevronDownIcon, SearchIcon, CheckIcon, CloseIcon } from '../../icons';
import { Text } from '../text/text';
import * as Popover from '../popover/popover';
import { IconButton } from '../icon-button/icon-button';
import { useCombobox } from './use-combobox';
import styles from './combobox.module.css';

export interface ComboboxOption {
	label: string;
	value: string;
	disabled?: boolean;
}

type ComboboxSize = '1' | '2' | '3';

export interface ComboboxProps {
	options: ComboboxOption[];
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string | undefined) => void;
	clearable?: boolean;
	variant?: 'default' | 'minimal';
	iconLeft?: React.ReactNode;
	placeholder?: string;
	searchPlaceholder?: string;
	emptyMessage?: string;
	size?: ComboboxSize;
	radius?: Radius;
	disabled?: boolean;
	error?: boolean | FormError | null;
	message?: string;
	width?: string;
	align?: 'start' | 'center' | 'end';
	side?: 'top' | 'right' | 'bottom' | 'left';
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	id?: string;
	className?: string;
}

export const Combobox = ({
	options,
	value,
	defaultValue,
	onValueChange,
	clearable = false,
	variant = 'default',
	iconLeft,
	placeholder = 'Select...',
	searchPlaceholder = 'Search...',
	emptyMessage = 'No results found',
	size = '2',
	radius,
	disabled = false,
	error = false,
	message,
	width,
	align = 'start',
	side = 'bottom',
	open: openProp,
	defaultOpen,
	onOpenChange,
	id,
	className,
}: ComboboxProps) => {
	const reactId = useId();
	const baseId = id ?? reactId;
	const listboxId = `${baseId}-listbox`;
	const optionId = (index: number) => `${baseId}-option-${index}`;

	const {
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
	} = useCombobox({
		options,
		value,
		defaultValue,
		onValueChange,
		open: openProp,
		defaultOpen,
		onOpenChange,
	});

	const hasError = getErrorState(error);
	const errorMessage = getErrorMessage(error, message);

	const scrollOptionIntoView = (index: number) => {
		document.getElementById(optionId(index))?.scrollIntoView({ block: 'nearest' });
	};

	const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			scrollOptionIntoView(moveActive(1));
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			scrollOptionIntoView(moveActive(-1));
		} else if (e.key === 'Enter') {
			e.preventDefault();
			const option = filtered[activeIndex];
			if (option) selectOption(option);
		}
	};

	const sizeClasses = {
		'1': styles.triggerSm,
		'2': styles.triggerMd,
		'3': styles.triggerLg,
	};

	const variantClasses = {
		default: undefined,
		minimal: styles.triggerMinimal,
	};

	return (
		<>
			<Popover.Root open={open} onOpenChange={setOpen}>
				<Popover.Trigger asChild>
					{/* Radix adds aria-expanded + aria-haspopup to this trigger for us */}
					<button
						type="button"
						id={baseId}
						disabled={disabled}
						data-placeholder={selectedOption ? undefined : ''}
						style={width ? { width } : undefined}
						className={cn(
							styles.trigger,
							variantClasses[variant],
							sizeClasses[size],
							radius && radiusClasses[radius],
							hasError && styles.triggerError,
							className,
						)}>
						{iconLeft && <span className={styles.triggerIconLeft}>{iconLeft}</span>}
						<span className={styles.triggerLabel}>
							{selectedOption ? selectedOption.label : placeholder}
						</span>
						{clearable && selectedOption && !disabled && (
							<IconButton
								icon={<CloseIcon />}
								label="Clear selection"
								size="1"
								className={styles.clearButton}
								onClick={(e) => {
									e.stopPropagation();
									clear();
								}}
							/>
						)}
						<ChevronDownIcon className={styles.triggerIcon} />
					</button>
				</Popover.Trigger>
				<Popover.Content align={align} side={side} className={styles.content}>
					<div className={styles.searchRow}>
						<SearchIcon className={styles.searchIcon} />
						{/*
							This input IS the combobox (not the trigger button).
							role=combobox: marks it as the searchable control.
							aria-expanded: the listbox is showing (always true while this is mounted).
							aria-controls: links it to the listbox by id.
							aria-activedescendant: points at the highlighted option's id so screen
							readers announce it while keyboard focus stays here in the input.
						*/}
						<input
							autoFocus
							type="text"
							role="combobox"
							aria-expanded={true}
							aria-controls={listboxId}
							aria-activedescendant={
								filtered[activeIndex] ? optionId(activeIndex) : undefined
							}
							placeholder={searchPlaceholder}
							value={search}
							onChange={(e) => changeSearch(e.target.value)}
							onKeyDown={handleSearchKeyDown}
							className={styles.search}
						/>
					</div>
					{/* role=listbox: the option list the input's aria-controls points to */}
					<ul id={listboxId} role="listbox" className={styles.list}>
						{filtered.length === 0 ? (
							<li className={styles.empty}>{emptyMessage}</li>
						) : (
							filtered.map((option, index) => {
								const isSelected = option.value === selectedValue;
								const isActive = index === activeIndex;

								return (
									// role=option + aria-selected: each row is a choice
									// aria-selected marks the current value
									// id is the activedescendant target
									<li
										key={option.value}
										id={optionId(index)}
										role="option"
										aria-selected={isSelected}
										aria-disabled={option.disabled || undefined}
										onClick={() => selectOption(option)}
										onPointerEnter={() => setActiveIndex(index)}
										className={cn(
											styles.option,
											isActive && styles.optionActive,
											option.disabled && styles.optionDisabled,
											radius && radius !== 'full' && radiusClasses[radius],
										)}>
										<span className={styles.optionLabel}>{option.label}</span>
										{isSelected && <CheckIcon className={styles.optionCheck} />}
									</li>
								);
							})
						)}
					</ul>
				</Popover.Content>
			</Popover.Root>
			{hasError && errorMessage && (
				<Text size="1" color="danger" className={styles.message}>
					{errorMessage}
				</Text>
			)}
		</>
	);
};

Combobox.displayName = 'Combobox';
