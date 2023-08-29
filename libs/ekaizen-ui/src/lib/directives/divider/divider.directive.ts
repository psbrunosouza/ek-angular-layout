import {Directive, HostBinding, Input} from '@angular/core';

type Space = 'sm' | 'base' | 'lg';

@Directive({
  selector: '[ekDivider]',
})
export class DividerDirective {
  @Input() ekDivider: Space = 'base';

  @HostBinding('style.margin')
  get padding() {
    const style = {
      sm: '16px 0',
      base: '24px 0',
      lg: '32px 0'
    }

    return `${style[this.ekDivider]}`;
  }
}
