import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './dropdown-menu.module.css';

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = ({
	className,
	children,
	...props
}: DropdownMenuPrimitive.DropdownMenuSubTriggerProps) => (
	<DropdownMenuPrimitive.SubTrigger
		className={cn(styles.subTrigger, className)}
		{...props}>
		{children}
		<span className={styles.arrow}>›</span>
	</DropdownMenuPrimitive.SubTrigger>
);

const DropdownMenuSubContent = ({
	className,
	...props
}: DropdownMenuPrimitive.DropdownMenuSubContentProps) => (
	<DropdownMenuPrimitive.SubContent
		className={cn(styles.subContent, className)}
		sideOffset={2}
		alignOffset={-5}
		{...props}
	/>
);

type DropdownMenuContentProps = DropdownMenuPrimitive.DropdownMenuContentProps & {
	size?: '1' | '2' | '3';
	compact?: boolean;
};

const DropdownMenuContent = ({
	className,
	sideOffset = 4,
	size = '2',
	compact = false,
	...props
}: DropdownMenuContentProps) => {
	const sizeClasses = {
		'1': styles.contentSm,
		'2': styles.contentMd,
		'3': styles.contentLg,
	};

	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				sideOffset={sideOffset}
				className={cn(
					styles.content,
					sizeClasses[size],
					compact && styles.contentCompact,
					className,
				)}
				{...props}
			/>
		</DropdownMenuPrimitive.Portal>
	);
};

const DropdownMenuItem = forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.Item ref={ref} className={cn(styles.item, className)} {...props} />
));

DropdownMenuItem.displayName = 'DropdownMenuItem';

const DropdownMenuSeparator = ({
	className,
	...props
}: DropdownMenuPrimitive.DropdownMenuSeparatorProps) => (
	<DropdownMenuPrimitive.Separator
		className={cn(styles.separator, className)}
		{...props}
	/>
);

const DropdownMenuLabel = ({
	className,
	...props
}: DropdownMenuPrimitive.DropdownMenuLabelProps) => (
	<DropdownMenuPrimitive.Label className={cn(styles.label, className)} {...props} />
);

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuLabel,
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuRadioGroup,
};
