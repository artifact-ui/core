import React from 'react';
import { cn } from '../../utils/cn';
import { SimpleRadius } from '../../types/style-props';
import { radiusClasses } from '../../styles/shared/shared-styles';
import styles from './avatar.module.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	src?: string;
	alt?: string;
	fallback?: React.ReactNode;
	size?: '1' | '2' | '3' | '4' | '5';
	shape?: 'circle' | 'square';
	radius?: SimpleRadius;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
	(
		{
			src,
			alt = 'Avatar',
			fallback,
			size = '3',
			shape = 'circle',
			radius,
			className,
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={cn(
					styles.avatar,
					styles[`size${size}`],
					styles[shape],
					radius && radiusClasses[radius],
					className,
				)}
				{...props}>
				{src ? (
					<img src={src} alt={alt} className={styles.image} />
				) : (
					<div className={styles.fallback}>{fallback}</div>
				)}
			</div>
		);
	},
);

Avatar.displayName = 'Avatar';
