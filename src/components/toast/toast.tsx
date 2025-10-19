import React, { forwardRef } from 'react';
import { Toast as RadixToast } from 'radix-ui';
import { CheckIcon, CircleAlertIcon, InfoIcon, CloseIcon } from '../../icons';
import { IconButton } from '../icon-button/icon-button';
import { cn } from '../../utils/cn';
import styles from './toast.module.css';

type ToastVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

export interface ToastProps extends RadixToast.ToastProps {
	variant?: ToastVariant;
	title?: string;
	description?: string;
	onClose?: () => void;
}

export interface ToastProviderProps {
	children: React.ReactNode;
	position?:
		| 'top-left'
		| 'top-center'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right';
	duration?: number;
}

const defaultIconMap = {
	default: InfoIcon,
	info: InfoIcon,
	success: CheckIcon,
	warning: CircleAlertIcon,
	error: CircleAlertIcon,
} as const;

const closeButtonColorMap = {
	default: 'neutral',
	info: 'info',
	success: 'success',
	warning: 'warning',
	error: 'danger',
} as const;

const Toast = forwardRef<HTMLLIElement, ToastProps>(
	(
		{ variant = 'default', title, description, onClose, className, children, ...props },
		ref,
	) => {
		const DefaultIcon = defaultIconMap[variant];

		const variantClasses = {
			default: styles.toastDefault,
			info: styles.toastInfo,
			success: styles.toastSuccess,
			warning: styles.toastWarning,
			error: styles.toastError,
		};

		const toastClasses = cn(styles.toast, variantClasses[variant], className);

		return (
			<RadixToast.Root ref={ref} className={toastClasses} {...props}>
				<div className={styles.toastContent}>
					{DefaultIcon && (
						<span className={styles.iconLeft}>
							<DefaultIcon />
						</span>
					)}
					<div className={styles.textContent}>
						{title && (
							<RadixToast.Title className={styles.toastTitle}>{title}</RadixToast.Title>
						)}
						{description && (
							<RadixToast.Description className={styles.toastDescription}>
								{description}
							</RadixToast.Description>
						)}
						{children}
					</div>
					<RadixToast.Close asChild>
						<IconButton
							icon={<CloseIcon />}
							label="Close"
							variant="ghost"
							color={closeButtonColorMap[variant]}
							size="1"
							className={styles.closeButton}
							onClick={onClose}
						/>
					</RadixToast.Close>
				</div>
			</RadixToast.Root>
		);
	},
);

Toast.displayName = 'Toast';

const ToastProvider: React.FC<ToastProviderProps> = ({
	children,
	position = 'bottom-right',
	duration = 5000,
}) => {
	const positionClasses = {
		'top-left': styles.viewportTopLeft,
		'top-center': styles.viewportTopCenter,
		'top-right': styles.viewportTopRight,
		'bottom-left': styles.viewportBottomLeft,
		'bottom-center': styles.viewportBottomCenter,
		'bottom-right': styles.viewportBottomRight,
	};

	return (
		<RadixToast.Provider duration={duration}>
			{children}
			<RadixToast.Viewport className={cn(styles.viewport, positionClasses[position])} />
		</RadixToast.Provider>
	);
};

ToastProvider.displayName = 'ToastProvider';

export { Toast, ToastProvider };
