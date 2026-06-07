import React, { forwardRef, createContext, useContext, useId } from 'react';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import { cn } from '../../utils/cn';
import { type FormError } from '../../types/form-types';
import { getErrorState, getErrorMessage } from '../../utils/form-error-helpers';
import { Text } from '../text/text';
import styles from './radio-group.module.css';

type RadioGroupSize = '1' | '2';

const RadioGroupContext = createContext<{ size: RadioGroupSize }>({ size: '2' });

export interface RadioGroupRootProps
	extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, 'dir'> {
	size?: RadioGroupSize;
	orientation?: 'vertical' | 'horizontal';
	error?: boolean | FormError | null;
	message?: string;
}

export interface RadioGroupItemProps
	extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
	children?: React.ReactNode;
}

const Root = forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	RadioGroupRootProps
>(
	(
		{
			size = '2',
			orientation = 'vertical',
			error = false,
			message,
			className,
			children,
			...props
		},
		ref,
	) => {
		const hasError = getErrorState(error);
		const errorMessage = getErrorMessage(error, message);

		return (
			<RadioGroupContext.Provider value={{ size }}>
				<RadioGroupPrimitive.Root
					ref={ref}
					orientation={orientation}
					className={cn(
						styles.root,
						orientation === 'horizontal' ? styles.horizontal : styles.vertical,
						className,
					)}
					{...props}>
					{children}
				</RadioGroupPrimitive.Root>

				{hasError && errorMessage && (
					<Text size="1" color="danger" className={styles.message}>
						{errorMessage}
					</Text>
				)}
			</RadioGroupContext.Provider>
		);
	},
);

Root.displayName = 'RadioGroupRoot';

const Item = forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	RadioGroupItemProps
>(({ className, children, id, ...props }, ref) => {
	const { size } = useContext(RadioGroupContext);
	const reactId = useId();
	const itemId = id ?? reactId;

	const sizeClasses = {
		'1': styles.radioSm,
		'2': styles.radioMd,
	};

	return (
		<div className={styles.item}>
			<RadioGroupPrimitive.Item
				ref={ref}
				id={itemId}
				className={cn(styles.radio, sizeClasses[size], className)}
				{...props}>
				<RadioGroupPrimitive.Indicator className={styles.indicator} />
			</RadioGroupPrimitive.Item>

			{children && (
				<label htmlFor={itemId} className={styles.label}>
					{children}
				</label>
			)}
		</div>
	);
});

Item.displayName = 'RadioGroupItem';

export { Root, Item };
