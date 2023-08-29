import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import {Color, Style, ButtonType} from "../../interfaces/component-interfaces";
import {Height, Width, ColorSchema} from "../../interfaces/component-interfaces";

const height: Record<Height, string> = {
  base: 'h-base',
  lg: 'h-lg',
  xl: 'h-xl',
};
const width: Record<Width, string> = {
  expand: 'w-full',
  fit: 'w-fit',
}
const colorSchema: ColorSchema = {
  base: {
    100: 'bg-base-100',
    200: 'bg-base-200',
    400: 'bg-base-400',
    600: 'bg-base-600',
    ripple: 'ripple-bg-base-200',
    text: 'text-base-600 fill-base-600',
    'text-white': 'text-white fill-white',
    border: 'border border-base-600',
  },
  contrast: {
    100: 'bg-contrast-100',
    200: 'bg-contrast-200',
    400: 'bg-contrast-400',
    600: 'bg-contrast-600',
    ripple: 'ripple-bg-contrast-200',
    text: 'text-contrast-600 fill-contrast-600',
    'text-white': 'text-white fill-white',
    border: 'border border-contrast-600',
  },
  highlight: {
    100: 'bg-highlight-100',
    200: 'bg-highlight-200',
    400: 'bg-highlight-400',
    600: 'bg-highlight-600',
    ripple: 'ripple-bg-highlight-200',
    text: 'text-highlight-600 fill-highlight-600',
    'text-white': 'text-white fill-white',
    border: 'border border-highlight-600',
  },
  gray: {
    100: 'bg-gray-100',
    200: 'bg-gray-200',
    400: 'bg-gray-400',
    600: 'bg-gray-600',
    ripple: 'ripple-bg-gray-200',
    text: 'text-gray-600 fill-gray-600',
    'text-white': 'text-white fill-white',
    border: 'border border-gray-600',
  },
  success:  {
    100: 'bg-success-100',
    200: 'bg-success-200',
    400: 'bg-success-400',
    600: 'bg-success-600',
    ripple: 'ripple-bg-success-200',
    text: 'text-success-600 fill-success-600',
    'text-white': 'text-success fill-success',
    border: 'border border-success-600',
  },
  danger:  {
    100: 'bg-danger-100',
    200: 'bg-danger-200',
    400: 'bg-danger-400',
    600: 'bg-danger-600',
    ripple: 'ripple-bg-danger-200',
    text: 'text-danger-600 fill-danger-600',
    'text-white': 'text-danger fill-danger',
    border: 'border border-danger-600',
  },
  warning:  {
    100: 'bg-warning-100',
    200: 'bg-warning-200',
    400: 'bg-warning-400',
    600: 'bg-warning-600',
    ripple: 'ripple-bg-warning-200',
    text: 'text-warning-600 fill-warning-600',
    'text-white': 'text-warning fill-warning',
    border: 'border border-warning-600',
  },
  info: {},
  white: {},
  black: {},
  transparent: {}
};

@Component({
  selector: 'ek-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() color: Color = 'base';

  @Input() height: Height = 'base';

  @Input() width: Width = 'fit';

  @Input() type: ButtonType = 'button';

  @Input() styleSchema: Style = 'full';

  @Input() disabled = false;

  @Input() loading = false;

  @Input() skeleton = false;

  get getLoadingStyle(): string {
    return this.loading ? `cursor-wait` : '';
  }

  get getTextColorStyle(): string {
    const style = {
      full: `${colorSchema[this.color]['text-white']}`,
      link: `${colorSchema[this.color]['text']}`,
      outline: `${colorSchema[this.color]['text']}`,
    };

    return `${style[this.styleSchema]}`;
  }

  get getWidthStyle(): string {
    return `${width[this.width]}`;
  }

  get getDisabledStyle(): string {
    const style = {
      full: `cursor-not-allowed ${colorSchema[this.color]['100']}`,
      link: `cursor-not-allowed`,
      outline: `cursor-not-allowed`,
    };

    return this.disabled ? `${style[this.styleSchema]}` : '';
  }

  get getBackgroundStyle(): string {
    const style = {
      full: `${colorSchema[this.color]['400']}`,
      link: `bg-transparent`,
      outline: `bg-transparent`,
    };

    return !this.disabled ? `${style[this.styleSchema]}` : '';
  }

  get getHoverStyle(): string {
    return !this.disabled && !this.loading && !this.skeleton
      ? `transition-all ease-in-out duration-300 delay-250 hover:brightness-[115%]`
      : '';
  }

  get setupSchema(): string {
    const style = {
      full: `rounded-sm px-lg font-bold ${this.getHoverStyle} ${this.getWidthStyle} ${
        height[this.height]
      } ${this.getLoadingStyle} ${this.getTextColorStyle} ${
        this.getBackgroundStyle
      } ${this.getDisabledStyle}`,
      link: `rounded-sm px-lg ${this.getWidthStyle} ${this.getHoverStyle} ${height[this.height]}  ${
        this.getDisabledStyle
      } ${this.getTextColorStyle} ${this.getLoadingStyle} ${
        this.getBackgroundStyle
      } font-bold`,
      outline: `rounded-sm px-lg ${this.getWidthStyle} ${this.getHoverStyle} ${height[this.height]} ${
        this.getDisabledStyle
      }  border-2 ${colorSchema[this.color]['border']} ${
        this.getTextColorStyle
      } ${this.getLoadingStyle} ${this.getBackgroundStyle} font-bold`,
    };

    return `${style[this.styleSchema]}`;
  }
}
