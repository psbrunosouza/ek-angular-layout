import { Meta, moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { TextModule } from '../text/text.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from '../button/button.module';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

export default {
  title: 'Form / Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        TextModule,
        ButtonModule,
        FontAwesomeModule,
        FeatherModule.pick(allIcons),
      ],
    }),
  ],
} as Meta<InputComponent>;


export const Text = {
  render: (args: InputComponent) => ({
    props: args,
    template: `<div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: grid; grid-template-columns: 1fr; gap: 16px;">
          <ek-input ngModel [required]="true" name="input" label="Input default validations" placeholder="input placeholder"></ek-input>
        </div>
      </div>`,
  }),
};

export const States = {
  render: (args: InputComponent) => ({
    props: args,
    template: `<div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <ek-input [disabled]="true" [required]="true" name="input" label="Input disabled" value="value" placeholder="input placeholder"></ek-input>
          <ek-input [disabled]="true" [readonly]="true" name="input" label="Input readonly" value="value" placeholder="input placeholder"></ek-input>
           <ek-input [skeleton]="true" [disabled]="true" [readonly]="true" name="input" label="Input readonly" value="value" placeholder="input placeholder"></ek-input>
        </div>
      </div>`,
  }),
};

export const Prefix = {
  render: (args: InputComponent) => ({
    props: args,
    template: `<div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <ek-input ngModel name="input" label="Input icon" placeholder="input placeholder">
             <div pre class="flex text-contrast fill-contrast">
                <i-feather name="mail"></i-feather>
              </div>
          </ek-input>
          <ek-input ngModel name="input" label="Input prefix" placeholder="input placeholder">
             <ek-text color="contrast" bold="true" pre>@domain</ek-text>
          </ek-input>
        </div>
      </div>`,
  }),
};

export const TextLength = {
  render: (args: InputComponent) => ({
    props: args,
    template: `<div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: grid; grid-template-columns: 1fr; gap: 16px;">
          <ek-input ngModel [minlength]="8" [maxlength]="255" name="input" label="Input length" placeholder="input placeholder">
          </ek-input>
        </div>
      </div>`,
  }),
};

export const Types = {
  render: (args: InputComponent) => ({
    props: args,
    template: `<div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <ek-input type="password" ngModel [strongPassword]="true" minlength="8" maxlength="255" name="input" label="Password" placeholder="type your password"></ek-input>
          <ek-input type="email" [email]="true" ngModel name="input" label="Email" placeholder="type your email"></ek-input>
            <ek-input type="number" [min]="1" [max]="100" ngModel name="input" label="Number"></ek-input>
        </div>
      </div>`,
  }),
};
