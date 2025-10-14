import React, { forwardRef } from 'react';
import { Dialog } from 'radix-ui';
import { cn } from '../../utils/cn';
import styles from './modal.module.css';
import { Button } from '../button/button';
import { CloseIcon } from '../../icons/CloseIcon';

export interface ModalProps {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
}

export interface ModalOverlayProps extends React.ComponentProps<typeof Dialog.Overlay> {}

export interface ModalContentProps extends React.ComponentProps<typeof Dialog.Content> {
	size?: '1' | '2' | '3' | '4';
	variant?: 'default' | 'simple';
	showCloseButton?: boolean;
	ariaDescription?: string;
}

export interface ModalTitleProps extends React.ComponentProps<typeof Dialog.Title> {
	children: React.ReactNode;
	iconLeft?: React.ReactNode;
}

export interface ModalDescriptionProps
	extends React.ComponentProps<typeof Dialog.Description> {
	children: React.ReactNode;
}

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	showCloseButton?: boolean;
	closeButtonClassName?: string;
}

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const Root: React.FC<ModalProps> = ({ open, onOpenChange, children }) => {
	return (
		<Dialog.Root open={open} onOpenChange={onOpenChange} modal={true}>
			{children}
		</Dialog.Root>
	);
};

Root.displayName = 'ModalRoot';

const Overlay = forwardRef<React.ElementRef<typeof Dialog.Overlay>, ModalOverlayProps>(
	({ className, ...props }, ref) => {
		return (
			<Dialog.Overlay ref={ref} className={cn(styles.overlay, className)} {...props} />
		);
	},
);

Overlay.displayName = 'ModalOverlay';

const Content = forwardRef<React.ElementRef<typeof Dialog.Content>, ModalContentProps>(
	(
		{ className, size = '2', variant = 'default', ariaDescription, children, ...props },
		ref,
	) => {
		const variantClasses = {
			default: styles.contentDefault,
			simple: styles.contentSimple,
		};

		const sizeClasses = {
			'1': styles.modalSm,
			'2': styles.modalMd,
			'3': styles.modalLg,
			'4': styles.modalXl,
		};

		return (
			<Dialog.Portal>
				<Dialog.Overlay className={styles.overlay} />
				<Dialog.Content
					ref={ref}
					className={cn(
						styles.content,
						variantClasses[variant],
						sizeClasses[size],
						className,
					)}
					{...props}>
					{ariaDescription && (
						<Dialog.Description className={styles.srOnly}>
							{ariaDescription}
						</Dialog.Description>
					)}
					{children}
				</Dialog.Content>
			</Dialog.Portal>
		);
	},
);

Content.displayName = 'ModalContent';

const Title = forwardRef<React.ElementRef<typeof Dialog.Title>, ModalTitleProps>(
	({ className, children, iconLeft, ...props }, ref) => {
		return (
			<Dialog.Title ref={ref} className={cn(styles.title, className)} {...props}>
				{iconLeft && <span className={styles.titleIcon}>{iconLeft}</span>}
				{children}
			</Dialog.Title>
		);
	},
);

Title.displayName = 'ModalTitle';

const Description = forwardRef<
	React.ElementRef<typeof Dialog.Description>,
	ModalDescriptionProps
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

Description.displayName = 'ModalDescription';

const Header = forwardRef<HTMLDivElement, ModalHeaderProps>(
	(
		{ className, children, showCloseButton = true, closeButtonClassName, ...props },
		ref,
	) => {
		return (
			<div ref={ref} className={cn(styles.header, className)} {...props}>
				{showCloseButton && (
					<Dialog.Close asChild>
						<Button
							variant="ghost"
							color="tertiary"
							size="1"
							className={cn(styles.closeButton, closeButtonClassName)}
							aria-label="Close modal">
							<CloseIcon />
						</Button>
					</Dialog.Close>
				)}
				{children}
			</div>
		);
	},
);

Header.displayName = 'ModalHeader';

const Body = forwardRef<HTMLDivElement, ModalBodyProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn(styles.body, className)} {...props}>
				{children}
			</div>
		);
	},
);

Body.displayName = 'ModalBody';

const Footer = forwardRef<HTMLDivElement, ModalFooterProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn(styles.footer, className)} {...props}>
				{children}
			</div>
		);
	},
);

Footer.displayName = 'ModalFooter';

// Trigger component - defaults to asChild to avoid layout interference
const Trigger = forwardRef<
	React.ElementRef<typeof Dialog.Trigger>,
	React.ComponentProps<typeof Dialog.Trigger>
>(({ asChild = true, ...props }, ref) => {
	return <Dialog.Trigger ref={ref} asChild={asChild} {...props} />;
});
Trigger.displayName = 'ModalTrigger';

// Close component - passes through to Dialog.Close
const Close = Dialog.Close;
Close.displayName = 'ModalClose';

// Export components
export {
	Root,
	Overlay,
	Content,
	Title,
	Description,
	Header,
	Body,
	Footer,
	Trigger,
	Close,
};
