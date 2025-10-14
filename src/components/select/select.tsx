import React, { forwardRef, createContext, useContext } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon } from '../../icons/CheckIcon';
import { CaretDownIcon } from '../../icons/CaretDownIcon';
import { cn } from '../../utils/cn';
import { type FormError } from '@/types/form-types';
import { getErrorState, getErrorMessage } from '@/utils/form-error-helpers';
import { Text } from '../text/text';
import styles from './select.module.css';

type SelectSize = '1' | '2' | '3' | '4';
type SelectRadius = '1' | '2' | '3';
type SelectColor = 'default' | 'secondary' | 'tertiary';
type SelectShadow = 'classic' | 'spread' | 'paper';

const SelectContext = createContext<{
	size: SelectSize;
	radius: SelectRadius;
	color: SelectColor;
	error: boolean;
	shadow: SelectShadow;
	compact: boolean;
}>({
	size: '2',
	radius: '1',
	color: 'default',
	error: false,
	shadow: 'classic',
	compact: false,
});

export interface SelectRootProps {
	children: React.ReactNode;
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string) => void;
	disabled?: boolean;
	name?: string;
	required?: boolean;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	size?: SelectSize;
	radius?: SelectRadius;
	color?: 'default' | 'secondary' | 'tertiary';
	shadow?: SelectShadow;
	error?: boolean | FormError | null;
	message?: string;
}

export interface SelectTriggerProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
	placeholder?: string;
	variant?: 'default' | 'minimal';
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	compact?: boolean;
	override?: boolean;
}

export interface SelectContentProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
	position?: 'item-aligned' | 'popper';
	side?: 'top' | 'right' | 'bottom' | 'left';
	align?: 'start' | 'center' | 'end';
	sideOffset?: number;
	compact?: boolean;
}

export interface SelectItemProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
	children: React.ReactNode;
	value: string;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
}

export interface SelectLabelProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {
	children: React.ReactNode;
}

export interface SelectSeparatorProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}

const Root = ({
	size = '2',
	radius = '1',
	color = 'default',
	shadow = 'classic',
	error = false,
	message,
	children,
	...props
}: SelectRootProps) => {
	const hasError = getErrorState(error);
	const errorMessage = getErrorMessage(error, message);

	return (
		<SelectContext.Provider
			value={{ size, radius, color, error: hasError, shadow, compact: false }}>
			<SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>
			{hasError && errorMessage && (
				<Text size="1" color="danger" className="mt-1 block">
					{errorMessage}
				</Text>
			)}
		</SelectContext.Provider>
	);
};

Root.displayName = 'SelectRoot';

const Group = SelectPrimitive.Group;

Group.displayName = 'SelectGroup';

const Value = SelectPrimitive.Value;

Value.displayName = 'SelectValue';

const Trigger = forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	SelectTriggerProps
>(
	(
		{
			placeholder,
			variant = 'default',
			iconLeft,
			iconRight,
			compact = false,
			override = false,
			className,
			...props
		},
		ref,
	) => {
		const { size, radius, color, error } = useContext(SelectContext);

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

		const radiusClasses = {
			'1': styles.triggerRadius1,
			'2': styles.triggerRadius2,
			'3': styles.triggerRadius3,
		};

		const colorClasses = {
			default: styles.triggerColorDefault,
			secondary: styles.triggerColorSecondary,
			tertiary: styles.triggerColorTertiary,
		};

		const triggerClasses = cn(
			styles.trigger,
			variantClasses[variant],
			sizeClasses[size],
			radiusClasses[radius],
			colorClasses[color],
			error && styles.triggerError,
			compact && styles.triggerCompact,
			override && 'aow',
			className,
		);

		return (
			<SelectPrimitive.Trigger ref={ref} className={triggerClasses} {...props}>
				<span className={styles.valueContainer}>
					{iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
					<SelectPrimitive.Value placeholder={placeholder} />
					{iconRight && <span className={styles.iconRight}>{iconRight}</span>}
				</span>
				<SelectPrimitive.Icon className={styles.triggerIcon}>
					<CaretDownIcon />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>
		);
	},
);

Trigger.displayName = 'SelectTrigger';

const Content = forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	SelectContentProps
>(
	(
		{
			position = 'popper',
			side = 'bottom',
			align = 'start',
			sideOffset = 4,
			compact = false,
			className,
			children,
			...props
		},
		ref,
	) => {
		const { size, radius, shadow } = useContext(SelectContext);

		const sizeClasses = {
			'1': styles.contentSm,
			'2': styles.contentMd,
			'3': styles.contentLg,
			'4': styles.contentXl,
		};

		const radiusClasses = {
			'1': styles.contentRadius1,
			'2': styles.contentRadius2,
			'3': styles.contentRadius3,
		};

		const shadowClasses = {
			classic: styles.contentShadowClassic,
			spread: styles.contentShadowSpread,
			paper: styles.contentShadowPaper,
		};

		const contentClasses = cn(
			styles.content,
			sizeClasses[size],
			radiusClasses[radius],
			shadowClasses[shadow],
			className,
		);

		const updatedContext = { ...useContext(SelectContext), compact };

		return (
			<SelectContext.Provider value={updatedContext}>
				<SelectPrimitive.Portal>
					<SelectPrimitive.Content
						ref={ref}
						position={position}
						side={side}
						align={align}
						sideOffset={sideOffset}
						className={contentClasses}
						{...props}>
						<SelectPrimitive.Viewport className={styles.viewport}>
							{children}
						</SelectPrimitive.Viewport>
					</SelectPrimitive.Content>
				</SelectPrimitive.Portal>
			</SelectContext.Provider>
		);
	},
);

Content.displayName = 'SelectContent';

const Item = forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, SelectItemProps>(
	({ className, children, iconLeft, iconRight, ...props }, ref) => {
		const { radius, compact } = useContext(SelectContext);

		const radiusClasses = {
			'1': styles.itemRadius1,
			'2': styles.itemRadius2,
			'3': styles.itemRadius3,
		};

		return (
			<SelectPrimitive.Item
				ref={ref}
				className={cn(
					styles.item,
					radiusClasses[radius],
					compact && styles.itemCompact,
					className,
				)}
				{...props}>
				<span className={styles.itemTextContainer}>
					{iconLeft && <span className={styles.itemIconLeft}>{iconLeft}</span>}
					<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
					{iconRight && <span className={styles.itemIconRight}>{iconRight}</span>}
				</span>
				{!compact && (
					<SelectPrimitive.ItemIndicator className={styles.itemIndicator}>
						<CheckIcon />
					</SelectPrimitive.ItemIndicator>
				)}
			</SelectPrimitive.Item>
		);
	},
);

Item.displayName = 'SelectItem';

const Label = forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	SelectLabelProps
>(({ className, ...props }, ref) => {
	const { size } = useContext(SelectContext);

	const sizeClasses = {
		'1': styles.labelSm,
		'2': styles.labelMd,
		'3': styles.labelLg,
		'4': styles.labelXl,
	};

	return (
		<SelectPrimitive.Label
			ref={ref}
			className={cn(styles.label, sizeClasses[size], className)}
			{...props}
		/>
	);
});

Label.displayName = 'SelectLabel';

const Separator = forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	SelectSeparatorProps
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={cn(styles.separator, className)}
		{...props}
	/>
));

Separator.displayName = 'SelectSeparator';

export { Root, Group, Value, Trigger, Content, Item, Label, Separator };
