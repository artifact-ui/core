import React, { forwardRef } from 'react';
import { Form } from 'radix-ui';
import { cn } from '../../utils/cn';
import { Radius } from '../../types/style-props';
import { type RadixInputType, type RadixFormMatchType } from '../../types/radix-types';
import { type FormError } from '../../types/form-types';
import { getErrorState, getErrorMessage } from '../../utils/form-error-helpers';
import { radiusClasses } from '../../styles/shared/shared-styles';
import { CloseIcon } from '../../icons';
import { IconButton } from '../icon-button/icon-button';
import styles from './textfield.module.css';

export interface TextFieldProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
	variant?: 'default' | 'minimal' | 'icon';
	size?: '1' | '2' | '3' | '4';
	radius?: Radius;
	error?: boolean | FormError | null;
	type?: RadixInputType;
	label?: string;
	message?: string;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	clearable?: boolean;
	onClear?: () => void;
	width?: string;
	match?: RadixFormMatchType;
	compact?: boolean;
	override?: boolean;
	collapsibleError?: boolean;
}

export interface TextFieldRootProps {
	children: React.ReactNode;
	className?: string;
	name: string;
	style?: React.CSSProperties;
}

export interface TextFieldSlotProps {
	children: React.ReactNode;
	side: 'left' | 'right';
}

const Root = ({ children, className, name, style, ...props }: TextFieldRootProps) => {
	return (
		<Form.Field
			name={name}
			className={cn(styles.field, className)}
			style={style}
			{...props}>
			{children}
		</Form.Field>
	);
};

Root.displayName = 'TextFieldRoot';

const Label = forwardRef<
	HTMLLabelElement,
	{
		children: React.ReactNode;
		className?: string;
	}
>(({ children, className }, ref) => {
	return (
		<Form.Label ref={ref} className={cn(styles.label, className)}>
			{children}
		</Form.Label>
	);
});

Label.displayName = 'TextFieldLabel';

const Slot = ({ children, side }: TextFieldSlotProps) => {
	return (
		<div className={cn(styles.slot, side === 'right' && styles.slotRight)}>
			{children}
		</div>
	);
};

Slot.displayName = 'TextFieldSlot';

const Message = forwardRef<
	HTMLDivElement,
	{
		children: React.ReactNode;
		match?: RadixFormMatchType;
		className?: string;
		id?: string;
	}
>(({ children, match, className, id }, ref) => {
	return (
		<Form.Message
			ref={ref}
			match={match}
			className={cn(styles.message, className)}
			id={id}>
			{children}
		</Form.Message>
	);
});

Message.displayName = 'TextFieldMessage';

const buttonSizeMap = {
	'1': '1',
	'2': '1',
	'3': '2',
	'4': '3',
} as const;

const Input = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			variant = 'default',
			size = '2',
			radius,
			error,
			type = 'text',
			className,
			iconLeft,
			iconRight,
			prefix,
			suffix,
			clearable,
			onClear,
			label,
			message,
			name,
			width,
			match,
			override = false,
			compact = false,
			...props
		},
		ref,
	) => {
		const hasError = getErrorState(error);
		const errorMessage = getErrorMessage(error, message);
		const errorId = `${name}-error`;

		const variantClasses = {
			default: styles.inputDefault,
			minimal: styles.inputMinimal,
			icon: styles.inputIcon,
		};

		const sizeClasses = {
			'1': styles.inputSm,
			'2': styles.inputMd,
			'3': styles.inputLg,
			'4': styles.inputXl,
		};

		const inputClasses = cn(
			styles.input,
			variantClasses[variant],
			sizeClasses[size],
			radius && radiusClasses[radius],
			hasError && styles.inputError,
			compact && styles.inputCompact,
			className,
		);

		if (!name) throw new Error('TextField requires a name prop');

		const input = (
			<Form.Control asChild>
				<input
					ref={ref}
					type={type}
					className={inputClasses}
					aria-invalid={hasError}
					aria-describedby={hasError ? errorId : undefined}
					{...props}
				/>
			</Form.Control>
		);

		const rootStyle = width ? { width } : undefined;
		const rootClassName = cn(
			styles.rootIcon,
			width && styles.fieldResponsive,
			override && 'aow',
		);

		if (variant === 'icon' && (iconLeft || iconRight || prefix || suffix || clearable)) {
			return (
				<Root name={name} className={rootClassName} style={rootStyle}>
					{label && <Label>{label}</Label>}
					<div className={cn(styles.inputContainer, radius && radiusClasses[radius])}>
						{prefix && <Slot side="left">{prefix}</Slot>}
						{iconLeft && <Slot side="left">{iconLeft}</Slot>}
						{input}
						{clearable && onClear && (
							<IconButton
								icon={<CloseIcon />}
								label="Clear input"
								size={buttonSizeMap[size]}
								onClick={onClear}
								className={styles.clearButton}
							/>
						)}
						{iconRight && <Slot side="right">{iconRight}</Slot>}
						{suffix && <Slot side="right">{suffix}</Slot>}
					</div>
					{errorMessage && (
						<Message id={errorId} match={match}>
							{errorMessage}
						</Message>
					)}
				</Root>
			);
		}

		return (
			<Root
				name={name}
				className={cn(width && styles.fieldResponsive, override && 'aow')}
				style={rootStyle}>
				{label && <Label>{label}</Label>}
				{input}
				{errorMessage && (
					<Message id={errorId} match={match}>
						{errorMessage}
					</Message>
				)}
			</Root>
		);
	},
);

Input.displayName = 'TextFieldInput';

const Standalone = forwardRef<
	HTMLInputElement,
	Omit<TextFieldProps, 'name'> & { name?: string }
>(
	(
		{
			variant = 'default',
			size = '2',
			radius,
			error,
			type = 'text',
			className,
			iconLeft,
			iconRight,
			prefix,
			suffix,
			clearable,
			onClear,
			width,
			compact = false,
			collapsibleError = false,
			message,
			override = false,
			...props
		},
		ref,
	) => {
		const hasError = getErrorState(error);
		const errorMessage = getErrorMessage(error, message);

		const variantClasses = {
			default: styles.inputDefault,
			minimal: styles.inputMinimal,
			icon: styles.inputIcon,
		};

		const sizeClasses = {
			'1': styles.inputSm,
			'2': styles.inputMd,
			'3': styles.inputLg,
			'4': styles.inputXl,
		};

		const inputClasses = cn(
			styles.input,
			variantClasses[variant],
			sizeClasses[size],
			radius && radiusClasses[radius],
			hasError && styles.inputError,
			compact && styles.inputCompact,
			className,
		);

		const rootStyle = width ? { width } : undefined;
		const containerClass = cn(
			styles.standalone,
			compact && styles.fieldCompact,
			width && styles.fieldResponsive,
			override && 'aow',
		);

		if (variant === 'icon' && (iconLeft || iconRight || prefix || suffix || clearable)) {
			return (
				<div
					className={cn(styles.rootIcon, containerClass, radius && radiusClasses[radius])}
					style={rootStyle}>
					<div className={cn(styles.inputContainer, radius && radiusClasses[radius])}>
						{prefix && <Slot side="left">{prefix}</Slot>}
						{iconLeft && <Slot side="left">{iconLeft}</Slot>}
						<input ref={ref} type={type} className={inputClasses} {...props} />
						{clearable && onClear && (
							<IconButton
								icon={<CloseIcon />}
								label="Clear input"
								size={buttonSizeMap[size]}
								onClick={onClear}
								className={styles.clearButton}
							/>
						)}
						{iconRight && <Slot side="right">{iconRight}</Slot>}
						{suffix && <Slot side="right">{suffix}</Slot>}
					</div>
					{errorMessage &&
						(collapsibleError ? (
							<div
								className={cn(
									styles.message,
									styles.standaloneMessageCollapsible,
									!hasError && styles.standaloneMessageCollapsibleHidden,
								)}>
								{errorMessage}
							</div>
						) : (
							<div className={styles.message}>{errorMessage}</div>
						))}
				</div>
			);
		}

		return (
			<div className={containerClass} style={rootStyle}>
				<input ref={ref} type={type} className={inputClasses} {...props} />
				{errorMessage &&
					(collapsibleError ? (
						<div
							className={cn(
								styles.message,
								styles.standaloneMessageCollapsible,
								!hasError && styles.standaloneMessageCollapsibleHidden,
							)}>
							{errorMessage}
						</div>
					) : (
						<div className={styles.message}>{errorMessage}</div>
					))}
			</div>
		);
	},
);

Standalone.displayName = 'TextFieldStandalone';

export { Root, Input, Standalone, Label, Message, Slot };
