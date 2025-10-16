import * as PopoverPrimitive from '@radix-ui/react-popover';
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { type SimpleRadius } from '../../types/style-props';
import { radiusClasses } from '../../styles/shared/shared-styles';
import styles from './popover.module.css';

const Root = PopoverPrimitive.Root;
const Trigger = PopoverPrimitive.Trigger;
const Anchor = PopoverPrimitive.Anchor;
const Close = PopoverPrimitive.Close;

export interface PopoverContentProps
	extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
	override?: boolean;
	radius?: SimpleRadius;
}

const Content = forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Content>,
	PopoverContentProps
>(({ className, override = false, radius, sideOffset = 4, ...props }, ref) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn(
				styles.content,
				radius && radiusClasses[radius],
				override && 'aow',
				className,
			)}
			{...props}
		/>
	</PopoverPrimitive.Portal>
));

Content.displayName = 'PopoverContent';

export { Root, Trigger, Anchor, Content, Close };
