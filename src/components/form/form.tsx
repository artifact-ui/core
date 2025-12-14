import React, { forwardRef } from 'react';
import { Form as RadixForm } from 'radix-ui';
import { cn } from '../../utils/cn';
import { type RadixFormMatchType } from '../../types/radix-types';
import styles from './form.module.css';

export interface FormFieldProps {
	children: React.ReactNode;
	className?: string;
	name: string;
	style?: React.CSSProperties;
}

export interface FormLabelProps {
	children: React.ReactNode;
	className?: string;
}

export interface FormMessageProps {
	children: React.ReactNode;
	match?: RadixFormMatchType;
	className?: string;
	id?: string;
}

const Field = ({ children, className, name, style, ...props }: FormFieldProps) => {
	return (
		<RadixForm.Field
			name={name}
			className={cn(styles.field, className)}
			style={style}
			{...props}>
			{children}
		</RadixForm.Field>
	);
};

Field.displayName = 'FormField';

const Label = forwardRef<HTMLLabelElement, FormLabelProps>(
	({ children, className }, ref) => {
		return (
			<RadixForm.Label ref={ref} className={cn(styles.label, className)}>
				{children}
			</RadixForm.Label>
		);
	},
);

Label.displayName = 'FormLabel';

const Message = forwardRef<HTMLDivElement, FormMessageProps>(
	({ children, match, className, id }, ref) => {
		return (
			<RadixForm.Message
				ref={ref}
				match={match}
				className={cn(styles.message, className)}
				id={id}>
				{children}
			</RadixForm.Message>
		);
	},
);

Message.displayName = 'FormMessage';

export { Field, Label, Message };
