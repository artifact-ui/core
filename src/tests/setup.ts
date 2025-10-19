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

// Required for Radix Select
Element.prototype.hasPointerCapture = vi.fn(() => false);
Element.prototype.releasePointerCapture = vi.fn();
Element.prototype.setPointerCapture = vi.fn();

// Required for theme detection
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn(() => ({ matches: false })),
});

// Mock localStorage
const storage: Record<string, string> = {};
Object.defineProperty(window, 'localStorage', {
	value: {
		getItem: (key: string) => storage[key] || null,
		setItem: (key: string, value: string) => (storage[key] = value),
		clear: () => Object.keys(storage).forEach((key) => delete storage[key]),
	},
});

afterEach(() => {
	cleanup();
	localStorage.clear();
});
