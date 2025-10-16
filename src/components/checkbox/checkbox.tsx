import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { CheckIcon } from '../../icons/CheckIcon';
import styles from './checkbox.module.css';

type CheckboxRadius = 'none' | '1' | '2' | 'full';

export interface CheckboxProps
	extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
	size?: '1' | '2';
	radius?: CheckboxRadius;
	override?: boolean;
}

const Checkbox = forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	CheckboxProps
>(({ className, size = '1', radius, override = false, ...props }, ref) => {
	const sizeClasses = {
		'1': styles.sizeSm,
		'2': styles.sizeMd,
	};

	const radiusClasses = {
		none: styles.radiusNone,
		'1': styles.radius1,
		'2': styles.radius2,
		full: styles.radiusFull,
	};

	return (
		<CheckboxPrimitive.Root
			ref={ref}
			className={cn(
				styles.root,
				sizeClasses[size],
				radius && radiusClasses[radius],
				override && 'aow',
				className,
			)}
			{...props}>
			<CheckboxPrimitive.Indicator className={styles.indicator}>
				<CheckIcon />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
