import { ReactNode, forwardRef, CSSProperties } from 'react';
import { cn } from '../../utils/cn';
import { toStyleUnit } from '../../utils/css';
import styles from './box.module.css';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	padding?: string | number;
	margin?: string | number;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
	({ children, padding, margin, className, style, ...props }, ref) => {
		const boxStyle: CSSProperties = {
			...(padding && { padding: toStyleUnit(padding) }),
			...(margin && { margin: toStyleUnit(margin) }),
			...style,
		};

		return (
			<div ref={ref} className={cn(styles.box, className)} style={boxStyle} {...props}>
				{children}
			</div>
		);
	},
);

Box.displayName = 'Box';
