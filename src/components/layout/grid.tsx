import { ReactNode, forwardRef, CSSProperties } from 'react';
import { cn } from '../../utils/cn';
import styles from './grid.module.css';
import { gapClasses } from './shared';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	columns?: number | string;
	gap?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
	({ children, columns, gap, className, style, ...props }, ref) => {
		const gridStyle: CSSProperties = {
			...(columns && {
				gridTemplateColumns:
					typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
			}),
			...style,
		};

		return (
			<div
				ref={ref}
				className={cn(styles.grid, gap && gapClasses[gap], className)}
				style={gridStyle}
				{...props}>
				{children}
			</div>
		);
	},
);

Grid.displayName = 'Grid';
