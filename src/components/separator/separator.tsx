import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Radius } from '../../types/style-props';
import styles from './separator.module.css';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: '1' | '2' | '3' | '4';
	orientation?: 'horizontal' | 'vertical';
	radius?: Radius;
	color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'info' | 'danger';
	opacity?: '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90';
	spaceY?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
	spaceX?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
	space?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
	override?: boolean;
}

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
	(
		{
			size = '1',
			orientation = 'horizontal',
			radius,
			color = 'primary',
			opacity,
			spaceY,
			spaceX,
			space,
			override = false,
			className,
			...props
		},
		ref,
	) => {
		const sizeClasses = {
			'1': styles.separatorSize1,
			'2': styles.separatorSize2,
			'3': styles.separatorSize3,
			'4': styles.separatorSize4,
		};

		const orientationClasses = {
			horizontal: styles.separatorHorizontal,
			vertical: styles.separatorVertical,
		};

		const radiusClasses = {
			'1': styles.separatorRadius1,
			'2': styles.separatorRadius2,
			'3': styles.separatorRadius3,
			full: styles.separatorRadiusFull,
		};

		const colorClasses = {
			primary: styles.separatorColorPrimary,
			secondary: styles.separatorColorSecondary,
			tertiary: styles.separatorColorTertiary,
			accent: styles.separatorColorAccent,
			info: styles.separatorColorInfo,
			danger: styles.separatorColorDanger,
		};

		const opacityClasses = {
			'10': styles.separatorOpacity10,
			'20': styles.separatorOpacity20,
			'30': styles.separatorOpacity30,
			'40': styles.separatorOpacity40,
			'50': styles.separatorOpacity50,
			'60': styles.separatorOpacity60,
			'70': styles.separatorOpacity70,
			'80': styles.separatorOpacity80,
			'90': styles.separatorOpacity90,
		};

		const spacingClasses = {
			'1': styles.separatorSpace1,
			'2': styles.separatorSpace2,
			'3': styles.separatorSpace3,
			'4': styles.separatorSpace4,
			'5': styles.separatorSpace5,
			'6': styles.separatorSpace6,
			'7': styles.separatorSpace7,
			'8': styles.separatorSpace8,
		};

		const spaceYClasses = {
			'1': styles.separatorSpaceY1,
			'2': styles.separatorSpaceY2,
			'3': styles.separatorSpaceY3,
			'4': styles.separatorSpaceY4,
			'5': styles.separatorSpaceY5,
			'6': styles.separatorSpaceY6,
			'7': styles.separatorSpaceY7,
			'8': styles.separatorSpaceY8,
		};

		const spaceXClasses = {
			'1': styles.separatorSpaceX1,
			'2': styles.separatorSpaceX2,
			'3': styles.separatorSpaceX3,
			'4': styles.separatorSpaceX4,
			'5': styles.separatorSpaceX5,
			'6': styles.separatorSpaceX6,
			'7': styles.separatorSpaceX7,
			'8': styles.separatorSpaceX8,
		};

		return (
			<div
				ref={ref}
				className={cn(
					styles.separator,
					sizeClasses[size],
					orientationClasses[orientation],
					colorClasses[color],
					opacity && opacityClasses[opacity],
					radius && radiusClasses[radius],
					space && spacingClasses[space],
					spaceY && spaceYClasses[spaceY],
					spaceX && spaceXClasses[spaceX],
					override && 'aow',
					className,
				)}
				{...props}
			/>
		);
	},
);

Separator.displayName = 'Separator';

export { Separator };