import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {Color, ColorSchema} from "../../interfaces/component-interfaces";

type Type = 'title' | 'subtitle' | 'section' | 'paragraph' | 'code' | 'quote';

const colorSchema: ColorSchema = {
  base: {
    text: 'text-base-600 fill-base-600',
    bg: 'bg-base-600',
  },
  contrast: {
    text: 'text-contrast-600 fill-contrast-600',
    bg: 'bg-contrast-600',
  },
  highlight: {
    text: 'text-highlight-600 fill-highlight-600',
    bg: 'bg-highlight-600',
  },
  black: {
    text: 'text-black fill-black',
    bg: 'bg-black',
  },
  white: {
    text: 'text-white fill-white',
    bg: 'bg-white',
  },
  transparent: {
    bg: 'bg-transparent',
  },
  success: {
    text: 'text-success-600 fill-success-600',
    bg: 'bg-success-600',
  },
  warning: {
    text: 'text-warning-600 fill-warning-600',
    bg: 'bg-warning-600',
  },
  gray: {
    text: 'text-gray-600 fill-gray-600',
    bg: 'bg-gray-600',
  },
  danger: {
    text: 'text-danger-600 fill-danger-600',
    bg: 'bg-danger-600',
  },
  info: {}
};

@Component({
  selector: 'ek-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {
  @Input() type: Type = 'paragraph';

  @Input() bold = false;

  @Input() italic = false;

  @Input() skeleton = false;

  @Input() skeletonWidth: string;

  @Input() color: Color = 'black';

  @Input() background: Color = 'transparent';

  get getTextColorStyle(): string {
    return `${colorSchema[this.color]['text']}`;
  }

  get getBackgroundColorStyle(): string {
    return `${colorSchema[this.background]['bg']}`;
  }

  get getBoldStyle(): string {
    return this.bold ? 'font-bold' : '';
  }

  get getItalicStyle(): string {
    return this.italic ? 'italic' : '';
  }

  get getTextTypeStyle(): string {
    const style: Record<Type, string> = {
      title: 'text-2xl',
      subtitle: 'text-xl',
      section: 'text-lg',
      paragraph: 'text-base',
      code: 'text-base font-mono',
      quote: 'text-sm',
    };

    return `${style[this.type]} ${this.getBackgroundColorStyle} ${
      this.getBoldStyle
    } ${this.getItalicStyle} ${
      this.getTextColorStyle
    }`;
  }
}
