import { forwardRef, createContext, useContext } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Checkbox } from '../checkbox/checkbox';
import { Badge } from '../badge/badge';
import { ChevronDownIcon, CloseIcon } from '../../icons';
import { cn } from '../../utils/cn';
import { type FormError } from '../../types/form-types';
import { type Radius } from '../../types/style-props';
import { getErrorState, getErrorMessage } from '../../utils/form-error-helpers';
import { radiusClasses } from '../../styles/shared/shared-styles';
import { Text } from '../text/text';
import styles from './multi-select.module.css';

type MultiSelectSize = '1' | '2' | '3' | '4';
type MultiSelectColor = 'primary' | 'secondary';
type MultiSelectShadow = 'classic' | 'spread' | 'paper';

const MultiSelectContext = createContext<{
	value: string[];
	onValueChange: (value: string[]) => void;
	size: MultiSelectSize;
	radius: Radius | undefined;
	color: MultiSelectColor;
	error: boolean;
	shadow: MultiSelectShadow;
	width?: string;
	renderValue?: (selected: string[]) => React.ReactNode;
	clearable?: boolean;
}>({
	value: [],
	onValueChange: () => {},
	size: '2',
	radius: undefined,
	color: 'primary',
	error: false,
	shadow: 'classic',
});

export interface MultiSelectRootProps {
	children: React.ReactNode;
	value?: string[];
	onValueChange?: (value: string[]) => void;
	disabled?: boolean;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	size?: MultiSelectSize;
	radius?: Radius;
	color?: 'primary' | 'secondary';
	shadow?: MultiSelectShadow;
	error?: boolean | FormError | null;
	message?: string;
	width?: string;
	renderValue?: (selected: string[]) => React.ReactNode;
	clearable?: boolean;
}

export interface MultiSelectTriggerProps
	extends Omit<React.ComponentPropsWithoutRef<'button'>, 'children'> {
	placeholder?: string;
	variant?: 'default' | 'minimal';
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
}

export interface MultiSelectContentProps
	extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
	side?: 'top' | 'right' | 'bottom' | 'left';
	align?: 'start' | 'center' | 'end';
	sideOffset?: number;
}

export interface MultiSelectItemProps {
	children: React.ReactNode;
	value: string;
}

const Root = ({
	size = '2',
	radius,
	color = 'primary',
	shadow = 'classic',
	error = false,
	message,
	value = [],
	onValueChange = () => {},
	width,
	renderValue,
	clearable,
	children,
	...props
}: MultiSelectRootProps) => {
	const hasError = getErrorState(error);
	const errorMessage = getErrorMessage(error, message);
	const rootStyle = width ? { width } : undefined;

	return (
		<MultiSelectContext.Provider
			value={{
				value,
				onValueChange,
				size,
				radius,
				color,
				error: hasError,
				shadow,
				width,
				renderValue,
				clearable,
			}}>
			<div style={rootStyle}>
				<DropdownMenuPrimitive.Root {...props}>{children}</DropdownMenuPrimitive.Root>
				{hasError && errorMessage && (
					<Text size="1" color="danger" className={styles.errorMessage}>
						{errorMessage}
					</Text>
				)}
			</div>
		</MultiSelectContext.Provider>
	);
};

Root.displayName = 'MultiSelectRoot';

const Trigger = forwardRef<HTMLButtonElement, MultiSelectTriggerProps>(
	(
		{
			placeholder = 'Select...',
			variant = 'default',
			iconLeft,
			iconRight,
			className,
			...props
		},
		ref,
	) => {
		const {
			value,
			size,
			radius,
			color,
			error,
			width,
			renderValue,
			clearable,
			onValueChange,
		} = useContext(MultiSelectContext);

		const variantClasses = {
			default: styles.triggerDefault,
			minimal: styles.triggerMinimal,
		};

		const sizeClasses = {
			'1': styles.triggerSm,
			'2': styles.triggerMd,
			'3': styles.triggerLg,
			'4': styles.triggerXl,
		};

		const colorClasses = {
			primary: styles.triggerColorPrimary,
			secondary: styles.triggerColorSecondary,
		};

		const badgeSizeMap = {
			'1': '1',
			'2': '2',
			'3': '3',
			'4': '4',
		} as const;

		const badgeColorMap = {
			primary: 'neutral',
			secondary: 'neutral',
		} as const;

		const getDisplayContent = () => {
			if (value.length === 0) {
				return <span className={styles.placeholder}>{placeholder}</span>;
			}

			if (renderValue) {
				return renderValue(value);
			}

			const firstValue = value[0];
			const remainingCount = value.length - 1;

			return (
				<span className={styles.badgeContainer}>
					<Badge
						size={badgeSizeMap[size]}
						variant="soft"
						color={badgeColorMap[color]}
						radius={radius}
						className={cn(
							styles.valueBadge,
							remainingCount > 0 && styles.valueBadgeConstrained,
						)}>
						{firstValue}
					</Badge>
					{remainingCount > 0 && (
						<span className={styles.remainingCount}>+{remainingCount}</span>
					)}
				</span>
			);
		};

		const triggerClasses = cn(
			styles.trigger,
			variantClasses[variant],
			sizeClasses[size],
			radius && radiusClasses[radius],
			colorClasses[color],
			error && styles.triggerError,
			className,
		);

		const triggerStyle = width ? { width } : undefined;

		return (
			<DropdownMenuPrimitive.Trigger asChild>
				<button ref={ref} className={triggerClasses} style={triggerStyle} {...props}>
					<span className={styles.valueContainer}>
						{iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
						{getDisplayContent()}
						{iconRight && <span className={styles.iconRight}>{iconRight}</span>}
					</span>
					{clearable && value.length > 0 && (
						<button
							type="button"
							onPointerDown={(e) => {
								e.preventDefault();
								e.stopPropagation();
								onValueChange([]);
							}}
							className={cn(
								styles.clearButton,
								color === 'primary'
									? styles.clearButtonPrimary
									: styles.clearButtonSecondary,
							)}
							aria-label="Clear selection">
							<CloseIcon size={14} />
						</button>
					)}
					<span className={styles.triggerIcon}>
						<ChevronDownIcon size={16} />
					</span>
				</button>
			</DropdownMenuPrimitive.Trigger>
		);
	},
);

Trigger.displayName = 'MultiSelectTrigger';

const Content = forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Content>,
	MultiSelectContentProps
>(
	(
		{ side = 'bottom', align = 'start', sideOffset = 4, className, children, ...props },
		ref,
	) => {
		const { size, radius, shadow } = useContext(MultiSelectContext);

		const sizeClasses = {
			'1': styles.contentSm,
			'2': styles.contentMd,
			'3': styles.contentLg,
			'4': styles.contentXl,
		};

		const shadowClasses = {
			classic: styles.contentShadowClassic,
			spread: styles.contentShadowSpread,
			paper: styles.contentShadowPaper,
		};

		const contentClasses = cn(
			styles.content,
			sizeClasses[size],
			radius && radius !== 'full' && radiusClasses[radius],
			shadowClasses[shadow],
			className,
		);

		return (
			<DropdownMenuPrimitive.Portal>
				<DropdownMenuPrimitive.Content
					ref={ref}
					side={side}
					align={align}
					sideOffset={sideOffset}
					className={contentClasses}
					{...props}>
					{children}
				</DropdownMenuPrimitive.Content>
			</DropdownMenuPrimitive.Portal>
		);
	},
);

Content.displayName = 'MultiSelectContent';

const Item = ({ children, value: itemValue }: MultiSelectItemProps) => {
	const { value, onValueChange, radius } = useContext(MultiSelectContext);

	const isChecked = value.includes(itemValue);

	const handleSelect = (e: Event) => {
		e.preventDefault();
		if (isChecked) {
			onValueChange(value.filter((v) => v !== itemValue));
		} else {
			onValueChange([...value, itemValue]);
		}
	};

	return (
		<DropdownMenuPrimitive.Item
			className={cn(styles.item, radius && radius !== 'full' && radiusClasses[radius])}
			onSelect={handleSelect}>
			<Checkbox checked={isChecked} size="1" className={styles.checkbox} />
			<span className={styles.itemText}>{children}</span>
		</DropdownMenuPrimitive.Item>
	);
};

Item.displayName = 'MultiSelectItem';

export { Root, Trigger, Content, Item };
