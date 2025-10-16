import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Radius } from '../../types/style-props';
import { radiusClasses } from '../../styles/shared/shared-styles';
import styles from './badge.module.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?: 'solid' | 'soft' | 'outline';
	color?: 'primary' | 'neutral' | 'info' | 'success' | 'danger';
	size?: '1' | '2' | '3' | '4';
	radius?: Radius;
	highContrast?: boolean;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	iconGap?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
	override?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
	(
		{
			variant = 'solid',
			color = 'neutral',
			size = '3',
			radius,
			highContrast = false,
			iconLeft,
			iconRight,
			iconGap,
			override = false,
			className,
			children,
			...props
		},
		ref,
	) => {
		const variantClasses = {
			solid: styles.badgeVariantSolid,
			soft: styles.badgeVariantSoft,
			outline: styles.badgeVariantOutline,
		};

		const colorClasses = {
			primary: styles.badgeColorPrimary,
			neutral: styles.badgeColorNeutral,
			info: styles.badgeColorInfo,
			success: styles.badgeColorSuccess,
			danger: styles.badgeColorDanger,
		};

		const sizeClasses = {
			'1': styles.badgeSize1,
			'2': styles.badgeSize2,
			'3': styles.badgeSize3,
			'4': styles.badgeSize4,
		};

		const iconGapClasses = {
			'1': styles.badgeIconGap1,
			'2': styles.badgeIconGap2,
			'3': styles.badgeIconGap3,
			'4': styles.badgeIconGap4,
			'5': styles.badgeIconGap5,
			'6': styles.badgeIconGap6,
			'7': styles.badgeIconGap7,
			'8': styles.badgeIconGap8,
		};

		const hasIcons = !!(iconLeft || iconRight);

		return (
			<span
				ref={ref}
				className={cn(
					styles.badge,
					hasIcons && styles.badgeWithIcons,
					iconGap && hasIcons && iconGapClasses[iconGap],
					variantClasses[variant],
					colorClasses[color],
					sizeClasses[size],
					radius && radiusClasses[radius],
					highContrast && styles.badgeHighContrast,
					override && 'aow',
					className,
				)}
				{...props}>
				{iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
				{children}
				{iconRight && <span className={styles.iconRight}>{iconRight}</span>}
			</span>
		);
	},
);

Badge.displayName = 'Badge';

export { Badge };
