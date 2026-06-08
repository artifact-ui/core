import { ReactNode, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './flex.module.css';
import { gapClasses } from './shared';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	gap?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
	justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
	inline?: boolean;
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
	(
		{
			children,
			direction = 'row',
			wrap,
			gap,
			justify = 'start',
			align = 'start',
			inline = false,
			className,
			...props
		},
		ref,
	) => {
		const directionClasses = {
			row: styles.row,
			column: styles.column,
			'row-reverse': styles.rowReverse,
			'column-reverse': styles.columnReverse,
		};

		const wrapClasses = {
			nowrap: styles.wrapNowrap,
			wrap: styles.wrap,
			'wrap-reverse': styles.wrapReverse,
		};

		const justifyClasses = {
			start: styles.justifyStart,
			center: styles.justifyCenter,
			end: styles.justifyEnd,
			between: styles.justifyBetween,
			around: styles.justifyAround,
			evenly: styles.justifyEvenly,
		};

		const alignClasses = {
			start: styles.alignStart,
			center: styles.alignCenter,
			end: styles.alignEnd,
			stretch: styles.alignStretch,
			baseline: styles.alignBaseline,
		};

		return (
			<div
				ref={ref}
				className={cn(
					styles.flex,
					inline && styles.inline,
					directionClasses[direction],
					wrap && wrapClasses[wrap],
					justifyClasses[justify],
					alignClasses[align],
					gap && gapClasses[gap],
					className,
				)}
				{...props}>
				{children}
			</div>
		);
	},
);

Flex.displayName = 'Flex';
