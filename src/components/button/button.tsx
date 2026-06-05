import React, { forwardRef } from 'react';
import { Slot } from 'radix-ui';
import { cn } from '../../utils/cn';
import { Radius } from '../../types/style-props';
import { radiusClasses } from '../../styles/shared/shared-styles';
import styles from './button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'default' | 'outline' | 'secondary' | 'tertiary' | 'ghost' | 'link';
	color?: 'primary' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';
	customColor?: string;
	size?: '1' | '2' | '3';
	radius?: Radius;
	loading?: boolean;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	override?: boolean;
	asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = 'default',
			color = 'primary',
			customColor,
			size = '2',
			radius,
			loading = false,
			iconLeft,
			iconRight,
			override = false,
			asChild = false,
			className,
			disabled,
			children,
			style,
			...props
		},
		ref,
	) => {
		const isIconOnly = !children && (iconLeft || iconRight) ? true : false;

		const variantClasses = {
			default: styles.buttonDefault,
			outline: styles.buttonOutline,
			secondary: styles.buttonSecondary,
			tertiary: styles.buttonTertiary,
			ghost: styles.buttonGhost,
			link: styles.buttonLink,
		};

		const colorClasses = {
			primary: styles.buttonColorPrimary,
			neutral: styles.buttonColorNeutral,
			info: styles.buttonColorInfo,
			success: styles.buttonColorSuccess,
			warning: styles.buttonColorWarning,
			danger: styles.buttonColorDanger,
		};

		const sizeClasses = {
			'1': styles.buttonSm,
			'2': styles.buttonMd,
			'3': styles.buttonLg,
		};

		const buttonClasses = cn(
			styles.button,
			variantClasses[variant],
			!customColor && colorClasses[color],
			customColor && styles.buttonCustomColor,
			sizeClasses[size],
			radius && radiusClasses[radius],
			loading && styles.buttonLoading,
			(disabled || loading) && styles.buttonDisabled,
			isIconOnly && styles.buttonIconOnly,
			override && 'aow',
			className,
		);

		const buttonStyle = customColor
			? {
					'--button-custom-color': customColor,
					...style,
				}
			: style;

		const isDisabled = disabled || loading;
		const Comp = asChild ? Slot.Root : 'button';
		const nativeProps = asChild ? {} : { disabled: isDisabled };

		return (
			<Comp
				ref={ref}
				className={buttonClasses}
				style={buttonStyle}
				aria-disabled={isDisabled || undefined}
				{...nativeProps}
				{...props}>
				{loading && <span className={styles.spinner} />}
				{iconLeft && !loading && <span className={styles.iconLeft}>{iconLeft}</span>}
				{asChild ? <Slot.Slottable>{children}</Slot.Slottable> : children}
				{iconRight && !loading && <span className={styles.iconRight}>{iconRight}</span>}
			</Comp>
		);
	},
);

Button.displayName = 'Button';

export { Button };
