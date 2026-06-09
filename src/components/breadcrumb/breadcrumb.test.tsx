import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import * as Breadcrumb from './breadcrumb';

const renderBreadcrumb = () =>
	renderComponent(
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/">Dashboard</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/orders">Orders</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page>Order #1042</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>,
	);

describe('Breadcrumb', () => {
	it('renders a navigation landmark labelled breadcrumb', () => {
		renderBreadcrumb();

		expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeInTheDocument();
	});

	it('renders links with their hrefs', () => {
		renderBreadcrumb();

		expect(screen.getByRole('link', { name: /dashboard/i })).toHaveAttribute('href', '/');
		expect(screen.getByRole('link', { name: /orders/i })).toHaveAttribute(
			'href',
			'/orders',
		);
	});

	it('marks the current page with aria-current', () => {
		renderBreadcrumb();

		expect(screen.getByText('Order #1042')).toHaveAttribute('aria-current', 'page');
	});

	it('renders default separators hidden from screen readers', () => {
		const { container } = renderBreadcrumb();

		const separators = container.querySelectorAll('[role="presentation"]');

		expect(separators).toHaveLength(2);
		expect(separators[0]).toHaveAttribute('aria-hidden', 'true');
	});

	it('renders a custom separator when children are provided', () => {
		renderComponent(
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="/">Dashboard</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>/</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Page>Settings</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>,
		);

		expect(screen.getByText('/')).toBeInTheDocument();
	});

	it('renders Link as a custom element with asChild', () => {
		renderComponent(
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link asChild>
							<a href="/profile" data-testid="router-link">
								Profile
							</a>
						</Breadcrumb.Link>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>,
		);

		expect(screen.getByTestId('router-link')).toHaveAttribute('href', '/profile');
	});

	it('applies a different size class when size changes', () => {
		const { rerender } = renderComponent(
			<Breadcrumb.Root size="2">
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Page>Home</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>,
		);
		const defaultClass = screen.getByRole('navigation').className;

		rerender(
			<Breadcrumb.Root size="3">
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Page>Home</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>,
		);

		expect(screen.getByRole('navigation').className).not.toBe(defaultClass);
	});
});
