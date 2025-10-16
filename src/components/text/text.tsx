import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './text.module.css';

type TextElement = HTMLParagraphElement | HTMLSpanElement | HTMLLabelElement;

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
	size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
	weight?: 'normal' | 'medium' | 'semibold' | 'bold';
	color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'info' | 'danger';
	align?: 'left' | 'center' | 'right';
	uppercase?: boolean;
	italic?: boolean;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	as?: 'p' | 'span' | 'label';
	override?: boolean;
	htmlFor?: string;
}

const Text = forwardRef<TextElement, TextProps>(
	(
		{
			size = '4',
			weight = 'normal',
			color = 'primary',
			align,
			uppercase = false,
			italic = false,
			iconLeft,
			iconRight,
			as = 'p',
			override = false,
			htmlFor,
			className,
			children,
			...props
		},
		ref,
	) => {
		const Component = as;

		const sizeClasses = {
			'1': styles.textSize1,
			'2': styles.textSize2,
			'3': styles.textSize3,
			'4': styles.textSize4,
			'5': styles.textSize5,
			'6': styles.textSize6,
			'7': styles.textSize7,
			'8': styles.textSize8,
		};


		const weightClasses = {
			normal: styles.textWeightNormal,
			medium: styles.textWeightMedium,
			semibold: styles.textWeightSemibold,
			bold: styles.textWeightBold,
		};

		const colorClasses = {
			primary: styles.textColorPrimary,
			secondary: styles.textColorSecondary,
			tertiary: styles.textColorTertiary,
			accent: styles.textColorAccent,
			info: styles.textColorInfo,
			danger: styles.textColorDanger,
		};

		const alignClasses = {
			left: styles.textAlignLeft,
			center: styles.textAlignCenter,
			right: styles.textAlignRight,
		};

		const hasIcons = !!(iconLeft || iconRight);

		const textClasses = cn(
			styles.text,
			hasIcons && styles.textWithIcons,
			sizeClasses[size],
			weightClasses[weight],
			colorClasses[color],
			align && alignClasses[align],
			uppercase && styles.textUppercase,
			italic && styles.textItalic,
			override && 'aow',
			className,
		);

		return (
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			<Component ref={ref as any} htmlFor={htmlFor} className={textClasses} {...props}>
				{iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
				{children}
				{iconRight && <span className={styles.iconRight}>{iconRight}</span>}
			</Component>
		);
	},
);

Text.displayName = 'Text';

export { Text };
