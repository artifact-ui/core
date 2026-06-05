import React, { forwardRef } from 'react';
import { Slot } from 'radix-ui';
import { cn } from '../../utils/cn';
import { ChevronRightIcon } from '../../icons';
import styles from './breadcrumb.module.css';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
	children: React.ReactNode;
	size?: '1' | '2' | '3';
}

export interface BreadcrumbListProps extends React.OlHTMLAttributes<HTMLOListElement> {
	children: React.ReactNode;
}

export interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
	children: React.ReactNode;
}

export interface BreadcrumbLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	asChild?: boolean;
}

export interface BreadcrumbPageProps extends React.HTMLAttributes<HTMLSpanElement> {
	children: React.ReactNode;
}

export interface BreadcrumbSeparatorProps extends React.LiHTMLAttributes<HTMLLIElement> {
	children?: React.ReactNode;
}

export type BreadcrumbEllipsisProps = React.HTMLAttributes<HTMLSpanElement>;

const Root = forwardRef<HTMLElement, BreadcrumbProps>(
	({ className, children, size = '2', ...props }, ref) => {
		const sizeClasses = {
			'1': styles.breadcrumbSize1,
			'2': undefined,
			'3': styles.breadcrumbSize3,
		};

		return (
			<nav
				ref={ref}
				aria-label="breadcrumb"
				className={cn(styles.breadcrumb, sizeClasses[size], className)}
				{...props}>
				{children}
			</nav>
		);
	},
);

Root.displayName = 'Breadcrumb';

const List = forwardRef<HTMLOListElement, BreadcrumbListProps>(
	({ className, children, ...props }, ref) => {
		return (
			<ol ref={ref} className={cn(styles.list, className)} {...props}>
				{children}
			</ol>
		);
	},
);

List.displayName = 'BreadcrumbList';

const Item = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
	({ className, children, ...props }, ref) => {
		return (
			<li ref={ref} className={cn(styles.item, className)} {...props}>
				{children}
			</li>
		);
	},
);

Item.displayName = 'BreadcrumbItem';

const Link = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
	({ className, children, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot.Root : 'a';

		return (
			<Comp ref={ref} className={cn(styles.link, className)} {...props}>
				{children}
			</Comp>
		);
	},
);

Link.displayName = 'BreadcrumbLink';

const Page = forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
	({ className, children, ...props }, ref) => {
		return (
			<span
				ref={ref}
				role="link"
				aria-disabled="true"
				aria-current="page"
				className={cn(styles.page, className)}
				{...props}>
				{children}
			</span>
		);
	},
);

Page.displayName = 'BreadcrumbPage';

const Separator = forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
	({ className, children, ...props }, ref) => {
		return (
			<li
				ref={ref}
				role="presentation"
				aria-hidden="true"
				className={cn(styles.separator, className)}
				{...props}>
				{children ?? <ChevronRightIcon />}
			</li>
		);
	},
);

Separator.displayName = 'BreadcrumbSeparator';

const Ellipsis = forwardRef<HTMLSpanElement, BreadcrumbEllipsisProps>(
	({ className, ...props }, ref) => {
		return (
			<span
				ref={ref}
				role="presentation"
				aria-hidden="true"
				className={cn(styles.ellipsis, className)}
				{...props}>
				…
			</span>
		);
	},
);

Ellipsis.displayName = 'BreadcrumbEllipsis';

export { Root, List, Item, Link, Page, Separator, Ellipsis };
