import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Radius } from '../../types/style-props';
import styles from './button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'default' | 'outline' | 'secondary' | 'tertiary' | 'ghost' | 'link';
	color?: 'primary' | 'neutral' | 'info' | 'success' | 'danger';
	customColor?: string;
	size?: '1' | '2' | '3';
	radius?: Radius;
	loading?: boolean;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	override?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = 'default',
			color = 'primary',
			customColor,
			size = '2',
			radius = '2',
			loading = false,
			iconLeft,
			iconRight,
			override = false,
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
			danger: styles.buttonColorDanger,
		};

		const sizeClasses = {
			'1': styles.buttonSm,
			'2': styles.buttonMd,
			'3': styles.buttonLg,
		};

		const radiusClasses = {
			'1': styles.buttonRadius1,
			'2': styles.buttonRadius2,
			'3': styles.buttonRadius3,
			full: styles.buttonRadiusFull,
		};

		const buttonClasses = cn(
			styles.button,
			variantClasses[variant],
			!customColor && colorClasses[color],
			customColor && styles.buttonCustomColor,
			sizeClasses[size],
			radiusClasses[radius],
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

		return (
			<button
				ref={ref}
				className={buttonClasses}
				style={buttonStyle}
				disabled={disabled || loading}
				aria-disabled={disabled || loading}
				{...props}>
				{loading && <span className={styles.spinner} />}
				{iconLeft && !loading && <span className={styles.iconLeft}>{iconLeft}</span>}
				{children}
				{iconRight && !loading && <span className={styles.iconRight}>{iconRight}</span>}
			</button>
		);
	},
);

Button.displayName = 'Button';

export { Button };
