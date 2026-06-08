import { ReactNode, forwardRef, CSSProperties } from 'react';
import { cn } from '../../utils/cn';
import styles from './grid.module.css';
import { gapClasses } from './shared';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	columns?: number | string;
	rows?: number | string;
	gap?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
	flow?: 'row' | 'column' | 'row-dense' | 'column-dense';
	align?: 'start' | 'center' | 'end' | 'stretch';
	justify?: 'start' | 'center' | 'end' | 'stretch';
	inline?: boolean;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
	(
		{
			children,
			columns,
			rows,
			gap,
			flow,
			align,
			justify,
			inline = false,
			className,
			style,
			...props
		},
		ref,
	) => {
		const flowClasses = {
			row: styles.flowRow,
			column: styles.flowColumn,
			'row-dense': styles.flowRowDense,
			'column-dense': styles.flowColumnDense,
		};

		const alignClasses = {
			start: styles.alignStart,
			center: styles.alignCenter,
			end: styles.alignEnd,
			stretch: styles.alignStretch,
		};

		const justifyClasses = {
			start: styles.justifyStart,
			center: styles.justifyCenter,
			end: styles.justifyEnd,
			stretch: styles.justifyStretch,
		};

		const gridStyle: CSSProperties = {
			...(columns && {
				gridTemplateColumns:
					typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
			}),
			...(rows && {
				gridTemplateRows: typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,
			}),
			...style,
		};

		return (
			<div
				ref={ref}
				className={cn(
					styles.grid,
					inline && styles.inline,
					gap && gapClasses[gap],
					flow && flowClasses[flow],
					align && alignClasses[align],
					justify && justifyClasses[justify],
					className,
				)}
				style={gridStyle}
				{...props}>
				{children}
			</div>
		);
	},
);

Grid.displayName = 'Grid';
