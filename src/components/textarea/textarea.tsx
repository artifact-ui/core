import React, { forwardRef } from 'react';
import { Form } from 'radix-ui';
import { cn } from '@/styles/utils';
import { type RadixFormMatchType } from '@/types/radix-types';
import { type FormError } from '@/types/form-types';
import { getErrorState, getErrorMessage } from '@/utils/form-error-helpers';
import styles from './textarea.module.css';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: boolean | FormError;
	label?: string;
	message?: string;
	width?: string;
	height?: string;
	rows?: number;
	match?: RadixFormMatchType;
	override?: boolean;
}

export interface TextAreaRootProps {
	children: React.ReactNode;
	className?: string;
	name: string;
	style?: React.CSSProperties;
}

const Root = ({ children, className, name, style, ...props }: TextAreaRootProps) => {
	return (
		<Form.Field
			name={name}
			className={cn(styles.field, className)}
			style={style}
			{...props}>
			{children}
		</Form.Field>
	);
};

Root.displayName = 'TextAreaRoot';

const Label = forwardRef<
	HTMLLabelElement,
	{
		children: React.ReactNode;
		className?: string;
	}
>(({ children, className }, ref) => {
	return (
		<Form.Label ref={ref} className={cn(styles.label, className)}>
			{children}
		</Form.Label>
	);
});

Label.displayName = 'TextAreaLabel';

const Message = forwardRef<
	HTMLDivElement,
	{
		children: React.ReactNode;
		match?: RadixFormMatchType;
		className?: string;
		id?: string;
	}
>(({ children, match, className, id }, ref) => {
	return (
		<Form.Message
			ref={ref}
			match={match}
			className={cn(styles.message, className)}
			id={id}
			data-testid={id}>
			{children}
		</Form.Message>
	);
});

Message.displayName = 'TextAreaMessage';

const Input = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ error, className, label, message, name, width, height, match, override = false, ...props }, ref) => {
		const hasError = getErrorState(error);
		const errorMessage = getErrorMessage(error, message);
		const errorId = `${name}-error`;

		const textareaClasses = cn(
			styles.textarea,
			styles.textareaDefault,
			hasError && styles.textareaError,
			className,
		);

		if (!name) throw new Error('TextArea requires a name value');

		const textarea = (
			<Form.Control asChild>
				<textarea
					ref={ref}
					className={textareaClasses}
					aria-invalid={hasError}
					aria-describedby={hasError ? errorId : undefined}
					{...props}
				/>
			</Form.Control>
		);

		const rootStyle = {
			...(width && { width }),
			...(height && { height }),
		};
		const rootClassName = cn(width && styles.fieldResponsive, override && 'aow');

		return (
			<Root name={name} className={rootClassName} style={rootStyle}>
				{label && <Label>{label}</Label>}
				{textarea}
				{errorMessage && (
					<Message id={errorId} match={match}>
						{errorMessage}
					</Message>
				)}
			</Root>
		);
	},
);

Input.displayName = 'TextAreaInput';

const Standalone = forwardRef<
	HTMLTextAreaElement,
	Omit<TextAreaProps, 'name'> & { name?: string }
>(({ error, className, width, height, override = false, ...props }, ref) => {
	const hasError = getErrorState(error);

	const textareaClasses = cn(
		styles.textarea,
		styles.textareaDefault,
		hasError && styles.textareaError,
		className,
	);

	const rootStyle = {
		...(width && { width }),
		...(height && { height }),
	};

	return (
		<div
			className={cn(styles.standalone, width && styles.fieldResponsive, override && 'aow')}
			style={rootStyle}>
			<textarea ref={ref} className={textareaClasses} {...props} />
		</div>
	);
});

Standalone.displayName = 'TextAreaStandalone';

// Export components
export { Root, Input, Standalone, Label, Message };
