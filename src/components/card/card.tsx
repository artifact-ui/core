import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { SimpleRadius } from '../../types/style-props';
import { radiusClasses } from '../../styles/shared/shared-styles';
import styles from './card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: 'default' | 'surface' | 'ghost';
	size?: '1' | '2' | '3';
	radius?: SimpleRadius;
	shadow?: false | true | 'classic' | 'spread' | 'paper';
	interactive?: boolean;
	override?: boolean;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const Root = forwardRef<HTMLDivElement, CardProps>(
	(
		{
			variant = 'default',
			size = '2',
			radius,
			shadow = false,
			interactive = false,
			override = false,
			className,
			children,
			...props
		},
		ref,
	) => {
		const variantClasses = {
			default: styles.cardDefault,
			surface: styles.cardSurface,
			ghost: styles.cardGhost,
		};

		const sizeClasses = {
			'1': styles.cardSize1,
			'2': styles.cardSize2,
			'3': styles.cardSize3,
		};

		const shadowClasses = {
			classic: styles.cardShadowClassic,
			spread: styles.cardShadowSpread,
			paper: styles.cardShadowPaper,
		};

		// Handle shadow prop: true = classic shadow, or specific type
		const shadowClass =
			shadow === true ? styles.cardShadowClassic : shadow && shadowClasses[shadow];

		const cardClasses = cn(
			styles.card,
			variantClasses[variant],
			sizeClasses[size],
			radius && radiusClasses[radius],
			interactive && styles.cardInteractive,
			shadowClass,
			override && 'aow',
			className,
		);

		return (
			<div ref={ref} className={cardClasses} {...props}>
				{children}
			</div>
		);
	},
);

Root.displayName = 'CardRoot';

const Header = forwardRef<HTMLDivElement, CardHeaderProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn(styles.header, className)} {...props}>
				{children}
			</div>
		);
	},
);

Header.displayName = 'CardHeader';

const Body = forwardRef<HTMLDivElement, CardBodyProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn(styles.body, className)} {...props}>
				{children}
			</div>
		);
	},
);

Body.displayName = 'CardBody';

const Footer = forwardRef<HTMLDivElement, CardFooterProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn(styles.footer, className)} {...props}>
				{children}
			</div>
		);
	},
);

Footer.displayName = 'CardFooter';

// Export components
export { Root, Header, Body, Footer };
