import { type FormError } from '../types/form-types';

// Determines if an error state should be displayed
export const getErrorState = (error?: boolean | FormError | null): boolean => {
	if (typeof error === 'boolean') return error;
	return error?.error ?? false;
};

// Extracts the error message to display
export const getErrorMessage = (
	error?: boolean | FormError | null,
	message?: string,
): string | undefined => {
	if (typeof error === 'object' && error?.error) return error.message;
	return message;
};
