import { ReactNode, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './stack.module.css';
import { gapClasses } from './shared';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	gap?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
	align?: 'stretch' | 'start' | 'center' | 'end';
	justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
	({ children, gap, align = 'stretch', justify, className, ...props }, ref) => {
		const alignmentClasses = {
			stretch: styles.stretch,
			start: styles.start,
			center: styles.center,
			end: styles.end,
		};

		const justifyClasses = {
			start: styles.justifyStart,
			center: styles.justifyCenter,
			end: styles.justifyEnd,
			between: styles.justifyBetween,
			around: styles.justifyAround,
			evenly: styles.justifyEvenly,
		};

		return (
			<div
				ref={ref}
				className={cn(
					styles.stack,
					alignmentClasses[align],
					justify && justifyClasses[justify],
					gap && gapClasses[gap],
					className,
				)}
				{...props}>
				{children}
			</div>
		);
	},
);

Stack.displayName = 'Stack';
