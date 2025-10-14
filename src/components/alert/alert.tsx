import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
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
				{iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}

				<div className={styles.content}>{children}</div>

				{iconRight && <span className={styles.iconRight}>{iconRight}</span>}
			</div>
		);
	},
);

Alert.displayName = 'Alert';

export { Alert };
