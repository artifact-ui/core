import { Icon, IconProps } from './Icon';

export const SearchIcon = (props: IconProps) => (
	<Icon {...props}>
		<circle cx="11" cy="11" r="8" />
		<path d="m21 21-4.34-4.34" />
	</Icon>
);
