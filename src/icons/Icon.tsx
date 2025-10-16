import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
	size?: number | string;
}

export const Icon = ({
	size,
	className,
	children,
	...props
}: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size || '1em'}
			height={size || '1em'}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			aria-hidden="true"
			{...props}
		>
			{children}
		</svg>
	);
};
