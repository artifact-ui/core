import * as PopoverPrimitive from '@radix-ui/react-popover';
import { forwardRef } from 'react';
import { cn } from '@/styles/utils';
import styles from './popover.module.css';

const Root = PopoverPrimitive.Root;
const Trigger = PopoverPrimitive.Trigger;
const Anchor = PopoverPrimitive.Anchor;
const Close = PopoverPrimitive.Close;

export interface PopoverContentProps
	extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
	override?: boolean;
}

const Content = forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Content>,
	PopoverContentProps
>(({ className, override = false, sideOffset = 4, ...props }, ref) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn(styles.content, override && 'aow', className)}
			{...props}
		/>
	</PopoverPrimitive.Portal>
));

Content.displayName = 'PopoverContent';

export { Root, Trigger, Anchor, Content, Close };
