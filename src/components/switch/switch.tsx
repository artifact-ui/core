import React, { forwardRef } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../utils/cn';
import styles from './switch.module.css';

export interface SwitchProps
	extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
	size?: '1' | '2' | '3';
	override?: boolean;
}

const Switch = forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
	({ size = '2', override = false, className, ...props }, ref) => {
		const sizeClasses = {
			'1': styles.switchSm,
			'2': styles.switchMd,
			'3': styles.switchLg,
		};

		const thumbSizeClasses = {
			'1': styles.thumbSm,
			'2': styles.thumbMd,
			'3': styles.thumbLg,
		};

		return (
			<SwitchPrimitive.Root
				ref={ref}
				className={cn(styles.switch, sizeClasses[size], override && 'aow', className)}
				{...props}>
				<SwitchPrimitive.Thumb className={cn(styles.thumb, thumbSizeClasses[size])} />
			</SwitchPrimitive.Root>
		);
	},
);

Switch.displayName = 'Switch';

export { Switch };
