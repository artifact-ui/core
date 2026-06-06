import { DayPicker, type DayPickerProps, type ChevronProps } from 'react-day-picker';
import { cn } from '../../utils/cn';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from '../../icons';
import styles from './calendar.module.css';

export type CalendarProps = DayPickerProps;

const calendarClassNames = {
	root: styles.root,
	months: styles.months,
	month: styles.month,
	month_caption: styles.monthCaption,
	caption_label: styles.captionLabel,
	dropdowns: styles.dropdowns,
	dropdown_root: styles.dropdownRoot,
	dropdown: styles.dropdown,
	nav: styles.nav,
	button_previous: styles.navButton,
	button_next: styles.navButton,
	month_grid: styles.monthGrid,
	weekdays: styles.weekdays,
	weekday: styles.weekday,
	weeks: styles.weeks,
	week: styles.week,
	day: styles.day,
	day_button: styles.dayButton,
	selected: styles.selected,
	today: styles.today,
	outside: styles.outside,
	disabled: styles.disabled,
	hidden: styles.hidden,
	range_start: styles.rangeStart,
	range_middle: styles.rangeMiddle,
	range_end: styles.rangeEnd,
};

const CalendarChevron = ({ orientation, className }: ChevronProps) => {
	const iconClass = cn(styles.chevron, className);

	if (orientation === 'left') return <ChevronLeftIcon className={iconClass} />;
	if (orientation === 'right') return <ChevronRightIcon className={iconClass} />;
	if (orientation === 'up') return <ChevronUpIcon className={iconClass} />;
	return <ChevronDownIcon className={iconClass} />;
};

export const Calendar = ({
	className,
	classNames,
	components,
	...props
}: CalendarProps) => {
	return (
		<DayPicker
			className={cn(styles.calendar, className)}
			classNames={{ ...calendarClassNames, ...classNames }}
			components={{ Chevron: CalendarChevron, ...components }}
			{...props}
		/>
	);
};

Calendar.displayName = 'Calendar';

export type { DateRange, Matcher } from 'react-day-picker';
