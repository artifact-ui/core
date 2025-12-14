import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { Button } from '../button/button';
import { cn } from '../../utils/cn';
import styles from './segment-control.module.css';

type SegmentControlOption<T> = {
	value: T;
	label: string;
};

export interface SegmentControlProps<T extends string> {
	options: SegmentControlOption<T>[];
	value: T;
	onChange: (value: T) => void;
	size?: '1' | '2' | '3';
	variant?: 'flat' | 'raised';
	className?: string;
}

const sizeClasses = {
	'1': styles.size1,
	'2': styles.size2,
	'3': styles.size3,
};

export const SegmentControl = <T extends string>({
	options,
	value,
	onChange,
	size = '2',
	variant = 'flat',
	className,
}: SegmentControlProps<T>) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const [enableTransitions, setEnableTransitions] = useState(false);
	const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
		visibility: 'hidden',
	});

	useEffect(() => {
		setEnableTransitions(true);
	}, []);

	useLayoutEffect(() => {
		const selectedIndex = options.findIndex((option) => option.value === value);
		const selectedButton = buttonRefs.current[selectedIndex];
		const container = containerRef.current;

		if (!selectedButton || !container) return;

		const containerRect = container.getBoundingClientRect();
		const buttonRect = selectedButton.getBoundingClientRect();

		const left = buttonRect.left - containerRect.left;
		const width = buttonRect.width;

		setIndicatorStyle({
			transform: `translateX(${left}px)`,
			width: `${width}px`,
			visibility: 'visible',
		});
	}, [value, options]);

	return (
		<div
			ref={containerRef}
			className={cn(styles.segmentControl, sizeClasses[size], className)}>
			<div
				className={cn(
					styles.indicator,
					enableTransitions && styles.indicatorWithTransition,
					variant === 'raised' && styles.indicatorRaised,
				)}
				style={indicatorStyle}
			/>
			{options.map((option, index) => (
				<Button
					key={option.value}
					ref={(el) => (buttonRefs.current[index] = el)}
					variant="ghost"
					color="neutral"
					size={size}
					className={cn(styles.option, value === option.value && styles.optionSelected)}
					onClick={() => onChange(option.value)}>
					{option.label}
				</Button>
			))}
		</div>
	);
};

SegmentControl.displayName = 'SegmentControl';
