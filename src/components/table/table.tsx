import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { SimpleRadius } from '../../types/style-props';
import { radiusClasses } from '../../styles/shared/shared-styles';
import styles from './table.module.css';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
	variant?: 'default' | 'surface' | 'ghost';
	size?: '1' | '2' | '3';
	compact?: boolean;
	striped?: boolean;
	radius?: SimpleRadius;
	shadow?: false | true | 'classic' | 'spread' | 'paper';
	highlight?: boolean;
	override?: boolean;
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
	children: React.ReactNode;
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
	children: React.ReactNode;
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
	children: React.ReactNode;
}

export interface TableHeaderCellProps
	extends React.ThHTMLAttributes<HTMLTableCellElement> {
	children?: React.ReactNode;
	justify?: 'start' | 'center' | 'end';
	textAlign?: 'start' | 'center' | 'end';
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
	children?: React.ReactNode;
	textAlign?: 'start' | 'center' | 'end';
	verticalAlign?: 'top' | 'middle' | 'bottom';
}

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
	children: React.ReactNode;
}

const Root = forwardRef<HTMLTableElement, TableProps>(
	(
		{
			variant = 'default',
			size = '2',
			compact = false,
			striped = false,
			radius,
			shadow = false,
			highlight = false,
			override = false,
			className,
			children,
			...props
		},
		ref,
	) => {
		const variantClasses = {
			default: styles.tableDefault,
			surface: styles.tableSurface,
			ghost: styles.tableGhost,
		};

		const sizeClasses = {
			'1': styles.tableSize1,
			'2': styles.tableSize2,
			'3': styles.tableSize3,
		};

		const shadowClasses = {
			classic: styles.tableShadowClassic,
			spread: styles.tableShadowSpread,
			paper: styles.tableShadowPaper,
		};

		// Handle shadow prop: true = classic shadow, or specific type
		const shadowClass =
			shadow === true ? styles.tableShadowClassic : shadow && shadowClasses[shadow];

		const tableClasses = cn(
			styles.table,
			variantClasses[variant],
			sizeClasses[size],
			compact && styles.tableCompact,
			striped && styles.tableStriped,
			highlight && styles.tableHighlight,
			radius && radiusClasses[radius],
			shadowClass,
			override && 'aow',
			className,
		);

		return (
			<table ref={ref} className={tableClasses} {...props}>
				{children}
			</table>
		);
	},
);

Root.displayName = 'TableRoot';

const Header = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
	({ className, children, ...props }, ref) => {
		return (
			<thead ref={ref} className={cn(styles.header, className)} {...props}>
				{children}
			</thead>
		);
	},
);

Header.displayName = 'TableHeader';

const Body = forwardRef<HTMLTableSectionElement, TableBodyProps>(
	({ className, children, ...props }, ref) => {
		return (
			<tbody ref={ref} className={cn(styles.body, className)} {...props}>
				{children}
			</tbody>
		);
	},
);

Body.displayName = 'TableBody';

const Row = forwardRef<HTMLTableRowElement, TableRowProps>(
	({ className, children, ...props }, ref) => {
		return (
			<tr ref={ref} className={cn(styles.row, className)} {...props}>
				{children}
			</tr>
		);
	},
);

Row.displayName = 'TableRow';

const HeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
	({ className, children, justify = 'start', textAlign = 'start', ...domProps }, ref) => {
		// Use textAlign if provided, otherwise fall back to justify
		const alignment = textAlign || justify;

		const cellClasses = cn(
			styles.headerCell,
			alignment === 'start' && styles.justifyStart,
			alignment === 'center' && styles.justifyCenter,
			alignment === 'end' && styles.justifyEnd,
			className,
		);

		return (
			<th ref={ref} className={cellClasses} {...domProps}>
				{children}
			</th>
		);
	},
);

HeaderCell.displayName = 'TableHeaderCell';

const Cell = forwardRef<HTMLTableCellElement, TableCellProps>(
	(
		{ className, children, textAlign = 'start', verticalAlign = 'middle', ...domProps },
		ref,
	) => {
		const cellClasses = cn(
			styles.cell,
			textAlign === 'start' && styles.alignStart,
			textAlign === 'center' && styles.alignCenter,
			textAlign === 'end' && styles.alignEnd,
			verticalAlign === 'top' && styles.valignTop,
			verticalAlign === 'middle' && styles.valignMiddle,
			verticalAlign === 'bottom' && styles.valignBottom,
			className,
		);

		return (
			<td ref={ref} className={cellClasses} {...domProps}>
				{children}
			</td>
		);
	},
);

Cell.displayName = 'TableCell';

const Footer = forwardRef<HTMLTableSectionElement, TableFooterProps>(
	({ className, children, ...props }, ref) => {
		return (
			<tfoot ref={ref} className={cn(styles.footer, className)} {...props}>
				{children}
			</tfoot>
		);
	},
);

Footer.displayName = 'TableFooter';

// Export components
export { Root, Header, Body, Row, HeaderCell, Cell, Footer };
