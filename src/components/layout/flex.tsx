import { ReactNode, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './flex.module.css';
import { gapClasses } from './shared';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	direction?: 'row' | 'column';
	gap?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
	justify?: 'start' | 'center' | 'end' | 'between';
	align?: 'start' | 'center' | 'end';
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
	(
		{
			children,
			direction = 'row',
			gap,
			justify = 'start',
			align = 'start',
			className,
			...props
		},
		ref,
	) => {
		const directionClasses = {
			row: styles.row,
			column: styles.column,
		};

		const justifyClasses = {
			start: styles.justifyStart,
			center: styles.justifyCenter,
			end: styles.justifyEnd,
			between: styles.justifyBetween,
		};

		const alignClasses = {
			start: styles.alignStart,
			center: styles.alignCenter,
			end: styles.alignEnd,
		};

		return (
			<div
				ref={ref}
				className={cn(
					styles.flex,
					directionClasses[direction],
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
