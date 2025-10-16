import { Icon, IconProps } from './Icon';

export const InfoIcon = (props: IconProps) => (
	<Icon {...props}>
		<circle cx="12" cy="12" r="10" />
		<path d="M12 16v-4" />
		<path d="M12 8h.01" />
	</Icon>
);
