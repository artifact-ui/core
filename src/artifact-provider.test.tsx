import { describe, it, expect, afterEach } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { ArtifactProvider } from './artifact-provider';

describe('ArtifactProvider', () => {
	afterEach(() => {
		document.documentElement.removeAttribute('data-theme');
		document.documentElement.removeAttribute('data-accent');
		document.documentElement.removeAttribute('data-radius');
	});

	it('renders children', () => {
		renderComponent(
			<ArtifactProvider>
				<div>Dunder Mifflin Paper Company</div>
			</ArtifactProvider>,
		);

		expect(screen.getByText('Dunder Mifflin Paper Company')).toBeInTheDocument();
	});

	it('applies default theme attributes', () => {
		renderComponent(
			<ArtifactProvider>
				<div>Content</div>
			</ArtifactProvider>,
		);

		expect(document.documentElement).toHaveAttribute('data-theme', 'light');
		expect(document.documentElement).toHaveAttribute('data-accent', 'obsidian');
		expect(document.documentElement).toHaveAttribute('data-radius', 'medium');
	});

	it('applies custom theme', () => {
		renderComponent(
			<ArtifactProvider theme="dark">
				<div>Content</div>
			</ArtifactProvider>,
		);

		expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
	});

	it('applies custom accent', () => {
		renderComponent(
			<ArtifactProvider accent="sage">
				<div>Content</div>
			</ArtifactProvider>,
		);

		expect(document.documentElement).toHaveAttribute('data-accent', 'sage');
	});

	it('applies custom radius', () => {
		renderComponent(
			<ArtifactProvider radius="full">
				<div>Content</div>
			</ArtifactProvider>,
		);

		expect(document.documentElement).toHaveAttribute('data-radius', 'full');
	});

	it('applies all custom attributes together', () => {
		renderComponent(
			<ArtifactProvider theme="dark" accent="sage" radius="large">
				<div>Regional Office</div>
			</ArtifactProvider>,
		);

		expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
		expect(document.documentElement).toHaveAttribute('data-accent', 'sage');
		expect(document.documentElement).toHaveAttribute('data-radius', 'large');
		expect(screen.getByText('Regional Office')).toBeInTheDocument();
	});
});
