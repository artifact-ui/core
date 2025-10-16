import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './heading.module.css';

type HeadingElement = HTMLHeadingElement;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
	weight?: 'normal' | 'medium' | 'semibold' | 'bold';
	color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'danger';
	align?: 'left' | 'center' | 'right';
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	override?: boolean;
}

const Heading = forwardRef<HeadingElement, HeadingProps>(
	(
		{
			size = '6',
			weight = 'bold',
			color = 'primary',
			align,
			iconLeft,
			iconRight,
			as = 'h2',
			override = false,
			className,
			children,
			...props
		},
		ref,
	) => {
		const Component = as;

		const sizeClasses = {
			'1': styles.headingSize1,
			'2': styles.headingSize2,
			'3': styles.headingSize3,
			'4': styles.headingSize4,
			'5': styles.headingSize5,
			'6': styles.headingSize6,
			'7': styles.headingSize7,
			'8': styles.headingSize8,
		};

		const weightClasses = {
			normal: styles.headingWeightNormal,
			medium: styles.headingWeightMedium,
			semibold: styles.headingWeightSemibold,
			bold: styles.headingWeightBold,
		};

		const colorClasses = {
			primary: styles.headingColorPrimary,
			secondary: styles.headingColorSecondary,
			tertiary: styles.headingColorTertiary,
			accent: styles.headingColorAccent,
			danger: styles.headingColorDanger,
		};

		const alignClasses = {
			left: styles.headingAlignLeft,
			center: styles.headingAlignCenter,
			right: styles.headingAlignRight,
		};

		const hasIcons = !!(iconLeft || iconRight);

		const headingClasses = cn(
			styles.heading,
			hasIcons && styles.headingWithIcons,
			sizeClasses[size],
			weightClasses[weight],
			colorClasses[color],
			align && alignClasses[align],
			override && 'aow',
			className,
		);

		return (
			<Component ref={ref} className={headingClasses} {...props}>
				{iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
				{children}
				{iconRight && <span className={styles.iconRight}>{iconRight}</span>}
			</Component>
		);
	},
);

Heading.displayName = 'Heading';

export { Heading };
