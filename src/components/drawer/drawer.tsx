import React, { forwardRef } from 'react';
import { Dialog } from 'radix-ui';
import { cn } from '../../utils/cn';
import { Button } from '../button/button';
import { CloseIcon } from '../../icons/CloseIcon';
import styles from './drawer.module.css';

type DrawerSide = 'top' | 'right' | 'bottom' | 'left';
type DrawerSize = '1' | '2' | '3';

export interface DrawerProps {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
}

export interface DrawerContentProps extends React.ComponentProps<typeof Dialog.Content> {
	side?: DrawerSide;
	size?: DrawerSize;
	showCloseButton?: boolean;
	ariaDescription?: string;
}

export interface DrawerTitleProps extends React.ComponentProps<typeof Dialog.Title> {
	children: React.ReactNode;
}

export interface DrawerDescriptionProps
	extends React.ComponentProps<typeof Dialog.Description> {
	children: React.ReactNode;
}

const Root: React.FC<DrawerProps> = ({ open, onOpenChange, children }) => {
	return (
		<Dialog.Root open={open} onOpenChange={onOpenChange} modal={true}>
			{children}
		</Dialog.Root>
	);
};

Root.displayName = 'DrawerRoot';

const Content = forwardRef<React.ElementRef<typeof Dialog.Content>, DrawerContentProps>(
	(
		{
			className,
			side = 'right',
			size = '2',
			showCloseButton = true,
			ariaDescription,
			children,
			...props
		},
		ref,
	) => {
		const sideClasses = {
			top: styles.sideTop,
			right: styles.sideRight,
			bottom: styles.sideBottom,
			left: styles.sideLeft,
		};

		const sizeClasses = {
			'1': styles.sizeSm,
			'2': styles.sizeMd,
			'3': styles.sizeLg,
		};

		return (
			<Dialog.Portal>
				<Dialog.Overlay className={styles.overlay} />
				<Dialog.Content
					ref={ref}
					className={cn(styles.content, sideClasses[side], sizeClasses[size], className)}
					{...props}>
					{ariaDescription && (
						<Dialog.Description className={styles.srOnly}>
							{ariaDescription}
						</Dialog.Description>
					)}

					{showCloseButton && (
						<Dialog.Close asChild>
							<Button
								variant="ghost"
								color="neutral"
								size="1"
								className={styles.closeButton}
								aria-label="Close drawer">
								<CloseIcon />
							</Button>
						</Dialog.Close>
					)}

					{children}
				</Dialog.Content>
			</Dialog.Portal>
		);
	},
);

Content.displayName = 'DrawerContent';

const Title = forwardRef<React.ElementRef<typeof Dialog.Title>, DrawerTitleProps>(
	({ className, children, ...props }, ref) => {
		return (
			<Dialog.Title ref={ref} className={cn(styles.title, className)} {...props}>
				{children}
			</Dialog.Title>
		);
	},
);

Title.displayName = 'DrawerTitle';

const Description = forwardRef<
	React.ElementRef<typeof Dialog.Description>,
	DrawerDescriptionProps
>(({ className, children, ...props }, ref) => {
	return (
		<Dialog.Description
			ref={ref}
			className={cn(styles.description, className)}
			{...props}>
			{children}
		</Dialog.Description>
	);
});

Description.displayName = 'DrawerDescription';

const Trigger = forwardRef<
	React.ElementRef<typeof Dialog.Trigger>,
	React.ComponentProps<typeof Dialog.Trigger>
>(({ asChild = true, ...props }, ref) => {
	return <Dialog.Trigger ref={ref} asChild={asChild} {...props} />;
});

Trigger.displayName = 'DrawerTrigger';

const Close = Dialog.Close;
Close.displayName = 'DrawerClose';

export { Root, Trigger, Content, Title, Description, Close };
