import React, { forwardRef } from 'react';
import { Button, ButtonProps } from '../button/button';

export interface IconButtonProps
	extends Omit<ButtonProps, 'iconLeft' | 'iconRight' | 'children'> {
	icon: React.ReactNode;
	label: string;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({ icon, label, variant = 'ghost', ...props }, ref) => {
		return (
			<Button ref={ref} variant={variant} iconLeft={icon} aria-label={label} {...props} />
		);
	},
);

IconButton.displayName = 'IconButton';

export { IconButton };
