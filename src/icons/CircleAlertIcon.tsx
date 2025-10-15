import { Icon, IconProps } from './Icon';

export const CircleAlertIcon = (props: IconProps) => (
	<Icon {...props}>
		<circle cx="12" cy="12" r="10" />
		<line x1="12" x2="12" y1="8" y2="12" />
		<line x1="12" x2="12.01" y1="16" y2="16" />
	</Icon>
);
