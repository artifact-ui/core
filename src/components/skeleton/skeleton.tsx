import React from 'react';
import { cn } from '../../utils/cn';
import { SimpleRadius } from '../../types/style-props';
import { radiusClasses } from '../../styles/shared/shared-styles';
import styles from './skeleton.module.css';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
	width?: string;
	height?: string;
	variant?: 'text' | 'circle' | 'rectangle';
	radius?: SimpleRadius;
	animate?: boolean;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
	(
		{
			className,
			width,
			height,
			variant = 'rectangle',
			radius,
			animate = true,
			style,
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={cn(
					styles.skeleton,
					styles[variant],
					radius && radiusClasses[radius],
					!animate && styles.noAnimation,
					className,
				)}
				style={{ width, height, ...style }}
				{...props}
			/>
		);
	},
);

Skeleton.displayName = 'Skeleton';

export interface SkeletonTextProps {
	lines?: number;
	animate?: boolean;
	className?: string;
}

export const SkeletonText = ({
	lines = 3,
	animate = true,
	className,
}: SkeletonTextProps) => (
	<div className={cn(styles.textContainer, className)}>
		{Array.from({ length: lines }).map((_, i) => (
			<Skeleton
				key={i}
				variant="text"
				width={i === lines - 1 ? '60%' : '100%'}
				animate={animate}
			/>
		))}
	</div>
);

SkeletonText.displayName = 'SkeletonText';
