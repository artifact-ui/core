import React, { forwardRef } from 'react';
import { AlertDialog } from 'radix-ui';
import { cn } from '../../utils/cn';
import { type SimpleRadius } from '../../types/style-props';
import { radiusClasses } from '../../styles/shared/shared-styles';
import { Button, type ButtonProps } from '../button/button';
import styles from './alert-dialog.module.css';

export interface AlertDialogProps {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
}

export interface AlertDialogContentProps
	extends React.ComponentProps<typeof AlertDialog.Content> {
	size?: '1' | '2' | '3';
	radius?: SimpleRadius;
}

export interface AlertDialogTitleProps
	extends React.ComponentProps<typeof AlertDialog.Title> {
	children: React.ReactNode;
	iconLeft?: React.ReactNode;
}

export interface AlertDialogDescriptionProps
	extends React.ComponentProps<typeof AlertDialog.Description> {
	children: React.ReactNode;
}

export interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export interface AlertDialogActionProps extends ButtonProps {}
export interface AlertDialogCancelProps extends ButtonProps {}

const Root: React.FC<AlertDialogProps> = ({ open, onOpenChange, children }) => {
	return (
		<AlertDialog.Root open={open} onOpenChange={onOpenChange}>
			{children}
		</AlertDialog.Root>
	);
};

Root.displayName = 'AlertDialogRoot';

const Content = forwardRef<
	React.ElementRef<typeof AlertDialog.Content>,
	AlertDialogContentProps
>(({ className, size = '2', radius, children, ...props }, ref) => {
	const sizeClasses = {
		'1': styles.contentSm,
		'2': styles.contentMd,
		'3': styles.contentLg,
	};

	return (
		<AlertDialog.Portal>
			<AlertDialog.Overlay className={styles.overlay} />
			<AlertDialog.Content
				ref={ref}
				className={cn(
					styles.content,
					sizeClasses[size],
					radius && radiusClasses[radius],
					className,
				)}
				{...props}>
				{children}
			</AlertDialog.Content>
		</AlertDialog.Portal>
	);
});

Content.displayName = 'AlertDialogContent';

const Title = forwardRef<
	React.ElementRef<typeof AlertDialog.Title>,
	AlertDialogTitleProps
>(({ className, children, iconLeft, ...props }, ref) => {
	return (
		<AlertDialog.Title ref={ref} className={cn(styles.title, className)} {...props}>
			{iconLeft && <span className={styles.titleIcon}>{iconLeft}</span>}
			{children}
		</AlertDialog.Title>
	);
});

Title.displayName = 'AlertDialogTitle';

const Description = forwardRef<
	React.ElementRef<typeof AlertDialog.Description>,
	AlertDialogDescriptionProps
>(({ className, children, ...props }, ref) => {
	return (
		<AlertDialog.Description
			ref={ref}
			className={cn(styles.description, className)}
			{...props}>
			{children}
		</AlertDialog.Description>
	);
});

Description.displayName = 'AlertDialogDescription';

const Footer = forwardRef<HTMLDivElement, AlertDialogFooterProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn(styles.footer, className)} {...props}>
				{children}
			</div>
		);
	},
);

Footer.displayName = 'AlertDialogFooter';

const Action = forwardRef<HTMLButtonElement, AlertDialogActionProps>(
	({ children, ...props }, ref) => {
		return (
			<AlertDialog.Action asChild>
				<Button ref={ref} {...props}>
					{children}
				</Button>
			</AlertDialog.Action>
		);
	},
);

Action.displayName = 'AlertDialogAction';

const Cancel = forwardRef<HTMLButtonElement, AlertDialogCancelProps>(
	({ children, variant = 'outline', color = 'neutral', ...props }, ref) => {
		return (
			<AlertDialog.Cancel asChild>
				<Button ref={ref} variant={variant} color={color} {...props}>
					{children}
				</Button>
			</AlertDialog.Cancel>
		);
	},
);

Cancel.displayName = 'AlertDialogCancel';

const Trigger = forwardRef<
	React.ElementRef<typeof AlertDialog.Trigger>,
	React.ComponentProps<typeof AlertDialog.Trigger>
>(({ asChild = true, ...props }, ref) => {
	return <AlertDialog.Trigger ref={ref} asChild={asChild} {...props} />;
});

Trigger.displayName = 'AlertDialogTrigger';

export { Root, Trigger, Content, Title, Description, Footer, Action, Cancel };
