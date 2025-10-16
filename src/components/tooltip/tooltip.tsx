import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { type SimpleRadius } from '../../types/style-props';
import { radiusClasses } from '../../styles/shared/shared-styles';
import styles from './tooltip.module.css';

const Provider = TooltipPrimitive.Provider;
const Root = TooltipPrimitive.Root;
const Trigger = TooltipPrimitive.Trigger;

export interface TooltipContentProps
	extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
	override?: boolean;
	radius?: SimpleRadius;
}

const Content = forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	TooltipContentProps
>(({ className, sideOffset = 4, radius, override = false, ...props }, ref) => (
	<TooltipPrimitive.Portal>
		<TooltipPrimitive.Content
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
	</TooltipPrimitive.Portal>
));

Content.displayName = 'TooltipContent';

export { Provider, Root, Trigger, Content };
