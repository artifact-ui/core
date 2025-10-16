import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn utility', () => {
	it('merges class names', () => {
		expect(cn('button', 'primary')).toBe('button primary');
	});

	it('filters out falsy values', () => {
		expect(cn('button', false, 'primary', null, 'large', undefined)).toBe(
			'button primary large',
		);
	});

	it('handles conditional classes', () => {
		const isActive = true;
		const isDisabled = false;

		expect(cn('button', isActive && 'active', isDisabled && 'disabled')).toBe(
			'button active',
		);
	});

	it('returns empty string for no classes', () => {
		expect(cn()).toBe('');
	});
});
