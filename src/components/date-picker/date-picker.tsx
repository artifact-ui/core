import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { type Radius } from '../../types/style-props';
import { type FormError } from '../../types/form-types';
import { getErrorState, getErrorMessage } from '../../utils/form-error-helpers';
import { radiusClasses } from '../../styles/shared/shared-styles';
import { CalendarIcon } from '../../icons';
import { Text } from '../text/text';
import * as Popover from '../popover/popover';
import { Calendar, type DateRange, type Matcher } from '../calendar/calendar';
import styles from './date-picker.module.css';

type DatePickerSize = '1' | '2' | '3';

interface DatePickerBaseProps {
	placeholder?: string;
	disabled?: boolean;
	size?: DatePickerSize;
	radius?: Radius;
	numberOfMonths?: number;
	defaultMonth?: Date;
	startMonth?: Date;
	endMonth?: Date;
	disabledDays?: Matcher | Matcher[];
	align?: 'start' | 'center' | 'end';
	side?: 'top' | 'right' | 'bottom' | 'left';
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	error?: boolean | FormError | null;
	message?: string;
	id?: string;
	className?: string;
}

export interface DatePickerSingleProps extends DatePickerBaseProps {
	mode?: 'single';
	selected?: Date;
	onSelect?: (date: Date | undefined) => void;
}

export interface DatePickerRangeProps extends DatePickerBaseProps {
	mode: 'range';
	selected?: DateRange;
	onSelect?: (range: DateRange | undefined) => void;
}

export type DatePickerProps = DatePickerSingleProps | DatePickerRangeProps;

const dateFormat: Intl.DateTimeFormatOptions = {
	month: 'short',
	day: 'numeric',
	year: 'numeric',
};

const formatDate = (date: Date) => date.toLocaleDateString(undefined, dateFormat);

const isCompleteRange = (
	range: DateRange | undefined,
): range is { from: Date; to: Date } =>
	!!range?.from && !!range?.to && range.from.getTime() !== range.to.getTime();

export const DatePicker = (props: DatePickerProps) => {
	const {
		placeholder = 'Select date',
		disabled = false,
		size = '2',
		radius,
		numberOfMonths,
		defaultMonth,
		startMonth,
		endMonth,
		disabledDays,
		align = 'start',
		side = 'bottom',
		error = false,
		message,
		id,
		className,
	} = props;

	const [internalOpen, setInternalOpen] = useState(props.defaultOpen ?? false);
	const open = props.open ?? internalOpen;

	const setOpen = (next: boolean) => {
		if (props.open === undefined) setInternalOpen(next);
		props.onOpenChange?.(next);
	};

	const hasError = getErrorState(error);
	const errorMessage = getErrorMessage(error, message);

	const sizeClasses = {
		'1': styles.triggerSm,
		'2': styles.triggerMd,
		'3': styles.triggerLg,
	};

	const renderShell = (label: string | null, calendar: React.ReactNode) => (
		<>
			<Popover.Root open={open} onOpenChange={setOpen}>
				<Popover.Trigger asChild>
					<button
						type="button"
						id={id}
						disabled={disabled}
						data-placeholder={label ? undefined : ''}
						className={cn(
							styles.trigger,
							sizeClasses[size],
							radius && radiusClasses[radius],
							hasError && styles.triggerError,
							className,
						)}>
						<CalendarIcon className={styles.triggerIcon} />
						<span className={styles.triggerLabel}>{label ?? placeholder}</span>
					</button>
				</Popover.Trigger>
				<Popover.Content align={align} side={side} className={styles.content}>
					{calendar}
				</Popover.Content>
			</Popover.Root>
			{hasError && errorMessage && (
				<Text size="1" color="danger" className={styles.message}>
					{errorMessage}
				</Text>
			)}
		</>
	);

	if (props.mode === 'range') {
		const range = props.selected;
		const onSelect = props.onSelect;

		let label: string | null = null;
		if (isCompleteRange(range)) {
			label = `${formatDate(range.from)} - ${formatDate(range.to)}`;
		} else if (range?.from) {
			label = formatDate(range.from);
		}

		return renderShell(
			label,
			<Calendar
				mode="range"
				selected={range}
				onSelect={(next) => {
					onSelect?.(next);
					if (isCompleteRange(next)) setOpen(false);
				}}
				disabled={disabledDays}
				numberOfMonths={numberOfMonths ?? 2}
				defaultMonth={defaultMonth}
				startMonth={startMonth}
				endMonth={endMonth}
				autoFocus
			/>,
		);
	}

	const date = props.selected;
	const onSelect = props.onSelect;
	const label = date ? formatDate(date) : null;

	return renderShell(
		label,
		<Calendar
			mode="single"
			selected={date}
			onSelect={(next) => {
				onSelect?.(next);
				setOpen(false);
			}}
			disabled={disabledDays}
			numberOfMonths={numberOfMonths}
			defaultMonth={defaultMonth}
			startMonth={startMonth}
			endMonth={endMonth}
			autoFocus
		/>,
	);
};

DatePicker.displayName = 'DatePicker';
