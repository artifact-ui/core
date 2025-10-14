import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { CheckIcon } from '../../icons/CheckIcon';
import styles from './checkbox.module.css';

export interface CheckboxProps
	extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
	size?: '1' | '2';
	override?: boolean;
}

const Checkbox = forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	CheckboxProps
>(({ className, size = '1', override = false, ...props }, ref) => {
	const sizeClasses = {
		'1': styles.sizeSm,
		'2': styles.sizeMd,
	};

	return (
		<CheckboxPrimitive.Root
			ref={ref}
			className={cn(styles.root, sizeClasses[size], override && 'aow', className)}
			{...props}>
			<CheckboxPrimitive.Indicator className={styles.indicator}>
				<CheckIcon />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
