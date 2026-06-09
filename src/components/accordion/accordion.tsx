import React, { forwardRef } from 'react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { cn } from '../../utils/cn';
import { ChevronDownIcon } from '../../icons';
import styles from './accordion.module.css';

export type AccordionRootProps = React.ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Root
>;

export interface AccordionItemProps
	extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

export interface AccordionTriggerProps
	extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
	children: React.ReactNode;
	iconLeft?: React.ReactNode;
}

export interface AccordionContentProps
	extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
	children: React.ReactNode;
}

const Root = ({ className, ...props }: AccordionRootProps) => {
	return <AccordionPrimitive.Root className={cn(styles.root, className)} {...props} />;
};

Root.displayName = 'AccordionRoot';

const Item = forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	AccordionItemProps
>(({ className, ...props }, ref) => {
	return (
		<AccordionPrimitive.Item
			ref={ref}
			className={cn(styles.item, className)}
			{...props}
		/>
	);
});

Item.displayName = 'AccordionItem';

const Trigger = forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	AccordionTriggerProps
>(({ className, children, iconLeft, ...props }, ref) => {
	return (
		<AccordionPrimitive.Header className={styles.header}>
			<AccordionPrimitive.Trigger
				ref={ref}
				className={cn(styles.trigger, className)}
				{...props}>
				<span className={styles.triggerContent}>
					{iconLeft && <span className={styles.triggerIcon}>{iconLeft}</span>}
					{children}
				</span>
				<ChevronDownIcon className={styles.chevron} aria-hidden />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
});

Trigger.displayName = 'AccordionTrigger';

const Content = forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	AccordionContentProps
>(({ className, children, ...props }, ref) => {
	return (
		<AccordionPrimitive.Content
			ref={ref}
			className={cn(styles.content, className)}
			{...props}>
			<div className={styles.contentInner}>{children}</div>
		</AccordionPrimitive.Content>
	);
});

Content.displayName = 'AccordionContent';

export { Root, Item, Trigger, Content };
