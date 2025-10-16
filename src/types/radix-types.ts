// Shared Radix UI types

export type RadixInputType =
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'hidden'
	| 'month'
	| 'number'
	| 'password'
	| 'search'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week';

export type RadixFormMatchType =
	| 'badInput'
	| 'patternMismatch'
	| 'rangeOverflow'
	| 'rangeUnderflow'
	| 'stepMismatch'
	| 'tooLong'
	| 'tooShort'
	| 'typeMismatch'
	| 'valid'
	| 'valueMissing';
