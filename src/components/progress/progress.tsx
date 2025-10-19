import { forwardRef } from 'react';
import * as RadixProgress from '@radix-ui/react-progress';
import { cn } from '../../utils/cn';
import styles from './progress.module.css';

type ProgressSize = '1' | '2' | '3';
type ProgressColor = 'primary' | 'neutral' | 'success';
type ProgressRadius = 'none' | '1' | 'full';

export interface ProgressProps extends Omit<RadixProgress.ProgressProps, 'value'> {
	value?: number;
	max?: number;
	size?: ProgressSize;
	color?: ProgressColor;
	radius?: ProgressRadius;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
	(
		{ value, max = 100, size = '2', color = 'primary', radius, className, ...props },
		ref,
	) => {
		const isIndeterminate = value === undefined;
		const percentage = isIndeterminate
			? 0
			: Math.min(100, Math.max(0, (value / max) * 100));

		const sizeClasses = {
			'1': styles.progressSize1,
			'2': styles.progressSize2,
			'3': styles.progressSize3,
		};

		const colorClasses = {
			primary: styles.progressPrimary,
			neutral: styles.progressNeutral,
			success: styles.progressSuccess,
		};

		const radiusClasses = {
			none: styles.radiusNone,
			'1': styles.radius1,
			full: styles.radiusFull,
		};

		if (isIndeterminate) {
			return (
				<div
					ref={ref}
					className={cn(
						styles.spinner,
						sizeClasses[size],
						colorClasses[color],
						className,
					)}
					role="progressbar"
					aria-label="Loading"
					{...props}
				/>
			);
		}

		return (
			<RadixProgress.Root
				ref={ref}
				value={percentage}
				max={100}
				className={cn(
					styles.progress,
					sizeClasses[size],
					radius && radiusClasses[radius],
					className,
				)}
				{...props}>
				<RadixProgress.Indicator
					className={cn(styles.progressIndicator, colorClasses[color])}
					style={{ transform: `translateX(-${100 - percentage}%)` }}
				/>
			</RadixProgress.Root>
		);
	},
);

Progress.displayName = 'Progress';
