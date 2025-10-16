import { SyntheticEvent } from 'react';

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type TextAreaEvent = React.ChangeEvent<HTMLTextAreaElement>;
export type CheckboxEvent = React.FormEvent<HTMLInputElement>;
export type SelectEvent = React.ChangeEvent<HTMLSelectElement>;
export type FormEvent = SyntheticEvent<HTMLFormElement, SubmitEvent>;

export type FormError = { error: boolean; message: string };
