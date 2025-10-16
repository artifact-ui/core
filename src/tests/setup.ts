import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Required for Radix UI
global.ResizeObserver =
	global.ResizeObserver ||
	vi.fn(() => ({
		observe: vi.fn(),
		unobserve: vi.fn(),
		disconnect: vi.fn(),
	}));

afterEach(() => {
	cleanup();
});
