import { ReactNode, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './stack.module.css';
import { gapClasses } from './shared';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	gap?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
	align?: 'stretch' | 'start' | 'center' | 'end';
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
	({ children, gap, align = 'stretch', className, ...props }, ref) => {
		const alignmentClasses = {
			stretch: styles.stretch,
			start: styles.start,
			center: styles.center,
			end: styles.end,
		};

		return (
			<div
				ref={ref}
				className={cn(
					styles.stack,
					alignmentClasses[align],
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
