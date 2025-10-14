import React, { forwardRef } from 'react';
import { CheckIcon, ErrorIcon, InfoIcon } from '@/components/icons';
import { cn } from '@/styles/utils';
import styles from './alert.module.css';

type AlertVariant = 'default' | 'success' | 'error';
type AlertSize = '1' | '2' | '3';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: AlertVariant;
	size?: AlertSize;
	shadow?: false | 'classic' | 'spread' | 'paper';
	rounded?: boolean;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	override?: boolean;
}

const defaultIconMap = {
	default: InfoIcon,
	success: CheckIcon,
	error: ErrorIcon,
} as const;

const Alert = forwardRef<HTMLDivElement, AlertProps>(
	(
		{
			variant = 'default',
			size = '2',
			shadow = false,
			rounded = false,
			iconLeft,
			iconRight,
			override = false,
			className,
			children,
			...props
		},
		ref,
	) => {
		// Use custom icon or fallback to default variant icon
		const DefaultIcon = defaultIconMap[variant];
		const leftIcon = iconLeft || (variant !== 'default' && DefaultIcon ? <DefaultIcon /> : null);

		const variantClasses = {
			default: styles.alertDefault,
			success: styles.alertSuccess,
			error: styles.alertError,
		};

		const sizeClasses = {
			'1': styles.alertSize1,
			'2': styles.alertSize2,
			'3': styles.alertSize3,
		};

		const shadowClasses = {
			classic: styles.alertShadowClassic,
			spread: styles.alertShadowSpread,
			paper: styles.alertShadowPaper,
		};

		const alertClasses = cn(
			styles.alert,
			variantClasses[variant],
			sizeClasses[size],
			shadow && shadowClasses[shadow],
			rounded && styles.alertRounded,
			override && 'aow',
			className,
		);

		return (
			<div
				ref={ref}
				className={alertClasses}
				role="alert"
				aria-live="polite"
				{...props}>
				{leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}

				<div className={styles.content}>{children}</div>

				{iconRight && <span className={styles.iconRight}>{iconRight}</span>}
			</div>
		);
	},
);

Alert.displayName = 'Alert';

export { Alert };
