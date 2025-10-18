import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Skeleton, SkeletonText } from './skeleton';

describe('Skeleton', () => {
	it('renders with default props', () => {
		renderComponent(<Skeleton data-testid="skeleton" />);
		expect(screen.getByTestId('skeleton')).toBeInTheDocument();
	});

	it('applies custom width and height', () => {
		renderComponent(<Skeleton data-testid="skeleton" width="200px" height="100px" />);
		const skeleton = screen.getByTestId('skeleton');
		expect(skeleton).toHaveStyle({ width: '200px', height: '100px' });
	});

	it('renders different variants', () => {
		renderComponent(<Skeleton variant="circle" data-testid="skeleton" />);
		const skeleton = screen.getByTestId('skeleton');
		expect(skeleton.className).toContain('circle');
	});

	it('disables animation when animate is false', () => {
		renderComponent(<Skeleton animate={false} data-testid="skeleton" />);
		const skeleton = screen.getByTestId('skeleton');
		expect(skeleton.className).toContain('noAnimation');
	});
});

describe('SkeletonText', () => {
	it('renders default number of lines', () => {
		const { container } = renderComponent(<SkeletonText />);
		const skeletons = container.querySelectorAll('[class*="skeleton"]');
		expect(skeletons).toHaveLength(3);
	});

	it('renders custom number of lines', () => {
		const { container } = renderComponent(<SkeletonText lines={5} />);
		const skeletons = container.querySelectorAll('[class*="skeleton"]');
		expect(skeletons).toHaveLength(5);
	});

	it('makes last line shorter', () => {
		const { container } = renderComponent(<SkeletonText lines={3} />);
		const skeletons = container.querySelectorAll('[class*="skeleton"]');
		const lastSkeleton = skeletons[skeletons.length - 1] as HTMLElement;
		expect(lastSkeleton).toHaveStyle({ width: '60%' });
	});
});
