import React, { forwardRef } from 'react';
import { CheckIcon, CircleAlertIcon, InfoIcon } from '../../icons';
import { cn } from '../../utils/cn';
import { Radius } from '../../types/style-props';
import { radiusClasses } from '../../styles/shared/shared-styles';
import styles from './alert.module.css';

type AlertVariant = 'default' | 'success' | 'error';
type AlertSize = '1' | '2' | '3';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: AlertVariant;
	size?: AlertSize;
	radius?: Radius;
	shadow?: false | 'classic' | 'spread' | 'paper';
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	override?: boolean;
}

const defaultIconMap = {
	default: InfoIcon,
	success: CheckIcon,
	error: CircleAlertIcon,
} as const;

const Alert = forwardRef<HTMLDivElement, AlertProps>(
	(
		{
			variant = 'default',
			size = '2',
			radius,
			shadow = false,
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
		const leftIcon =
			iconLeft || (variant !== 'default' && DefaultIcon ? <DefaultIcon /> : null);

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
			radius && radiusClasses[radius],
			shadow && shadowClasses[shadow],
			override && 'aow',
			className,
		);

		return (
			<div ref={ref} className={alertClasses} role="alert" aria-live="polite" {...props}>
				{leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}

				<div className={styles.content}>{children}</div>

				{iconRight && <span className={styles.iconRight}>{iconRight}</span>}
			</div>
		);
	},
);

Alert.displayName = 'Alert';

export { Alert };
