export type Color =
  | 'base'
  | 'contrast'
  | 'highlight'
  | 'gray'
  | 'success'
  | 'danger'
  | 'warning'
  | 'transparent'
  | 'black'
  | 'white'
  | 'info';
export type ColorSchema = Record<Color, { [key: string]: string }>;
export type Height = 'base' | 'lg' | 'xl';
export type Width = 'expand' | 'fit';

/**
 * BUTTON
 */
export type ButtonType = 'button' | 'submit';

/**
 * INPUT
 */
export type Style = 'full' | 'link' | 'outline';
export type InputType = 'text' | 'password' | 'email' | 'decimal' | 'number';
