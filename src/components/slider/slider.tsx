import React, { forwardRef } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '../../utils/cn';
import styles from './slider.module.css';

export interface SliderProps
	extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
	size?: '1' | '2' | '3';
}

const sizeClasses = {
	'1': styles.size1,
	'2': styles.size2,
	'3': styles.size3,
};

const thumbSizeClasses = {
	'1': styles.thumb1,
	'2': styles.thumb2,
	'3': styles.thumb3,
};

const Slider = forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
	({ size = '2', className, ...props }, ref) => {
		return (
			<SliderPrimitive.Root
				ref={ref}
				className={cn(styles.slider, sizeClasses[size], className)}
				{...props}>
				<SliderPrimitive.Track className={styles.track}>
					<SliderPrimitive.Range className={styles.range} />
				</SliderPrimitive.Track>
				<SliderPrimitive.Thumb className={cn(styles.thumb, thumbSizeClasses[size])} />
			</SliderPrimitive.Root>
		);
	},
);

Slider.displayName = 'Slider';

export { Slider };
