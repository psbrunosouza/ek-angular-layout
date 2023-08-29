import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  Optional,
  Self,
} from '@angular/core';
import {
  InputType,
  Color,
} from '../../interfaces/component-interfaces';
import { ColorSchema } from '../../interfaces/component-interfaces';
import { Height } from '../../interfaces/component-interfaces';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import {
  faExclamationCircle,
  faCheckCircle,
  faEye,
  faEyeSlash,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { IErrorSchema } from '../../interfaces/error-schema';

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
    'text-white': 'text-gray fill-gray',
    border: 'border border-gray-200',
  },
  success: {
    100: 'bg-success-100',
    200: 'bg-success-200',
    400: 'bg-success-400',
    600: 'bg-success-600',
    ripple: 'ripple-bg-success-200',
    text: 'text-success-600 fill-success-600',
    'text-white': 'text-success fill-success',
    border: 'border border-success-600',
  },
  danger: {
    100: 'bg-danger-100',
    200: 'bg-danger-200',
    400: 'bg-danger-400',
    600: 'bg-danger-600',
    ripple: 'ripple-bg-danger-200',
    text: 'text-danger-600 fill-danger-600',
    'text-white': 'text-danger fill-danger',
    border: 'border border-danger-600',
  },
  warning: {
    100: 'bg-warning-100',
    200: 'bg-warning-200',
    400: 'bg-warning-400',
    600: 'bg-warning-600',
    ripple: 'ripple-bg-warning-200',
    text: 'text-warning-600 fill-warning-600',
    'text-white': 'text-warning fill-warning',
    border: 'border border-warning-600',
  },
  info: {
    100: 'bg-info-100',
    200: 'bg-info-200',
    400: 'bg-info-400',
    600: 'bg-info-600',
    ripple: 'ripple-bg-info-200',
    text: 'text-info-600 fill-info-600',
    'text-white': 'text-info fill-info',
    border: 'border border-info-600',
  },
  white: {},
  transparent: {},
  black: {},
};

const height: Record<Height, string> = {
  base: 'h-base',
  lg: 'h-lg',
  xl: 'h-xl',
};

@Component({
  selector: 'ek-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string;

  @Input() color: Color = 'gray';

  @Input() name: string;

  @Input() placeholder: string;

  @Input() maxlength: number;

  @Input() minlength = 0;

  @Input() height: Height = 'base';

  @Input() type: InputType = 'text';

  @Input() value: string;

  @Input() disabled = false;

  @Input() readonly = false;

  @Input() required = false;

  @Input() skeleton = false;

  @Input() strongPassword = false;

  @Input() email = false;

  @Input() max: number;

  @Input() min = 0;

  @Input() errorMessages: IErrorSchema = {
    required: 'Campo obrigatório',
    minlength: 'Deve conter no mínimo',
    strongPassword:
      'Deve conter, uma letra maiuscula, um número e um caracter especial',
    email: 'Formato de e-mail inválido',
  };

  focused = false;

  showPassword = false;

  errorIcon = faExclamationCircle;

  successIcon = faCheckCircle;

  passwordOn = faEye;

  passwordOff = faEyeSlash;

  arrowLeft = faArrowLeft;

  arrowRight = faArrowRight;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    this.ngControl && (this.ngControl.valueAccessor = this);
  }

  public onChange: (value: string) => void;

  public onTouched: () => void;

  protected get getErrors(): string[] {
    const strongPassword = /^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).{8,}$/;
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors: IErrorSchema = {
      required:
        this.required && !this.value?.length ? this.errorMessages.required : '',
      minlength:
        this.value?.length < this.minlength
          ? `${this.errorMessages.minlength} ${this.minlength} caracteres`
          : '',
      strongPassword:
        this.strongPassword && this.value && !strongPassword.test(this.value)
          ? this.errorMessages.strongPassword
          : '',
      email:
        this.email && this.value && !email.test(this.value)
          ? this.errorMessages.email
          : '',
    };

    return Object.entries(errors)
      .filter(([key, value]) => !!value)
      .map(([key, value]) => value);
  }

  protected get togglePassword(): string {
    return this.showPassword ? 'text' : 'password';
  }

  protected  getArrowInputDisabledStyle(arrow: string): string {
    if(arrow === 'left' && parseInt(this.value) === this.min){
      return 'text-gray-400 cursor-auto';
    }else if(arrow === 'right' && parseInt(this.value) === this.max) {
      return 'text-gray-400 cursor-auto';
    }
    return 'cursor-pointer';
  }

  protected get getColorSchemeStyle(): string {
    if (this.disabled || this.readonly) {
      return `text-gray-400 border-gray-100 bg-gray-100`;
    } else if (this.focused) {
      return `border-info-600`;
    } else if (
      this.getErrors.length &&
      this.ngControl &&
      this.ngControl?.dirty
    ) {
      return `${colorSchema['danger']['border']}`;
    } else if (
      !this.getErrors.length &&
      this.ngControl &&
      this.ngControl?.dirty
    ) {
      return `${colorSchema['success']['border']}`;
    } else {
      return `${colorSchema[this.color]['border']}`;
    }
  }

  protected get getPlaceholderStyle(): string {
    return this.placeholder ? `${this.placeholder}` : '';
  }

  protected get getHeightStyle(): string {
    return `${height[this.height]}`;
  }

  protected get setupStyle(): string {
    return `${this.getColorSchemeStyle} ${this.getHeightStyle} justify-center border-2 rounded-sm px-sm flex items-center`;
  }

  protected get setupSkeleton(): string {
    return `${this.getHeightStyle}  justify-center rounded-sm px-sm flex items-center w-full skeleton`;
  }

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public onChangeModel(event?: any, ref?: any) {
    if (this.type === 'number' && event && ref && event.target.value === '') {
      ref.reset();
      this.value = '0';
      event.target.value = '0';
    }
    this.onChange(this.value);
  }

  public focus(): void {
    this.focused = true;
  }

  public onTouchModel() {
    this.onTouched();
    this.focused = false;
  }

  protected increase(): void {
    this.ngControl?.control?.markAsDirty();

    if (this.value === '') {
      this.value = '0';
    }

    if (this.max && parseInt(this.value) + 1 > this.max) {
      this.value = this.max.toString();
    } else {
      let value = parseInt(this.value);
      value += 1;
      this.value = value.toString();
    }
  }

  protected decrease(): void {
    this.ngControl?.control?.markAsDirty();

    if (this.value === '') {
      this.value = '0';
    }

    console.log(parseInt(this.value) - 2);

    if (this.min && parseInt(this.value) - 1 < this.min) {
      this.value = this.min.toString();
    } else {
      let value = parseInt(this.value);
      value -= 1;
      this.value = value.toString();
    }
  }
}
