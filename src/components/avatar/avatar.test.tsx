import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Avatar } from './avatar';
import { UserIcon } from '@/icons';

describe('Avatar', () => {
	it('renders image when src is provided', () => {
		renderComponent(<Avatar src="https://example.com/avatar.jpg" alt="Dr. Chen" />);
		const img = screen.getByRole('img', { name: /dr. chen/i });
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
	});

	it('renders fallback when no src is provided', () => {
		renderComponent(<Avatar fallback="DR" data-testid="avatar" />);
		expect(screen.getByTestId('avatar')).toHaveTextContent('DR');
	});

	it('renders icon fallback', () => {
		renderComponent(<Avatar fallback={<UserIcon data-testid="user-icon" />} />);
		expect(screen.getByTestId('user-icon')).toBeInTheDocument();
	});

	it('applies size classes', () => {
		renderComponent(<Avatar src="https://example.com/avatar.jpg" size="4" data-testid="avatar" />);
		const avatar = screen.getByTestId('avatar');
		expect(avatar.className).toContain('size4');
	});

	it('renders circle shape by default', () => {
		renderComponent(<Avatar src="https://example.com/avatar.jpg" data-testid="avatar" />);
		const avatar = screen.getByTestId('avatar');
		expect(avatar.className).toContain('circle');
	});

	it('renders square shape', () => {
		renderComponent(
			<Avatar src="https://example.com/avatar.jpg" shape="square" data-testid="avatar" />,
		);
		const avatar = screen.getByTestId('avatar');
		expect(avatar.className).toContain('square');
	});

	it('uses default alt text when not provided', () => {
		renderComponent(<Avatar src="https://example.com/avatar.jpg" />);
		expect(screen.getByRole('img')).toHaveAttribute('alt', 'Avatar');
	});
});
