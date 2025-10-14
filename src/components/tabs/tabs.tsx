import React, { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../utils/cn';
import styles from './tabs.module.css';

// Tabs Root
export interface TabsRootProps
	extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
	override?: boolean;
}

const Root = forwardRef<
	React.ElementRef<typeof TabsPrimitive.Root>,
	TabsRootProps
>(({ override = false, className, ...props }, ref) => {
	return (
		<TabsPrimitive.Root
			ref={ref}
			className={cn(styles.root, override && 'aow', className)}
			{...props}
		/>
	);
});

Root.displayName = 'TabsRoot';

// Tabs List
export interface TabsListProps
	extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
	size?: '1' | '2' | '3';
	override?: boolean;
}

const List = forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	TabsListProps
>(({ size = '2', override = false, className, ...props }, ref) => {
	const sizeClasses = {
		'1': styles.listSm,
		'2': styles.listMd,
		'3': styles.listLg,
	};

	return (
		<TabsPrimitive.List
			ref={ref}
			className={cn(styles.list, sizeClasses[size], override && 'aow', className)}
			{...props}
		/>
	);
});

List.displayName = 'TabsList';

// Tabs Trigger
export interface TabsTriggerProps
	extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
	override?: boolean;
}

const Trigger = forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	TabsTriggerProps
>(({ override = false, className, ...props }, ref) => {
	return (
		<TabsPrimitive.Trigger
			ref={ref}
			className={cn(styles.trigger, override && 'aow', className)}
			{...props}
		/>
	);
});

Trigger.displayName = 'TabsTrigger';

// Tabs Content
export interface TabsContentProps
	extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
	override?: boolean;
}

const Content = forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	TabsContentProps
>(({ override = false, className, ...props }, ref) => {
	return (
		<TabsPrimitive.Content
			ref={ref}
			className={cn(styles.content, override && 'aow', className)}
			{...props}
		/>
	);
});

Content.displayName = 'TabsContent';

export { Root, List, Trigger, Content };
