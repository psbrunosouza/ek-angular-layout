import { Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { FeatherModule } from 'angular-feather';
import {allIcons} from 'angular-feather/icons';
export default {
  title: 'Form / Button',
  component: ButtonComponent,
  decorators: [moduleMetadata({ imports: [FeatherModule.pick(allIcons)]})],
} as Meta<ButtonComponent>;

export const Styles = {
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
      content: 'button',
    },
    template: `
        <div class="flex items-center">
            <ek-button styleSchema="link">Link</ek-button>&nbsp;
            <ek-button styleSchema="full" >Full</ek-button>&nbsp;
            <ek-button styleSchema="outline" >Outline</ek-button>&nbsp;
        </div>`,
  }),
};

export const Colors = {
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
      content: 'button',
    },
    template: `
        <div  class="flex items-center">
            <ek-button color="base">Primary</ek-button>&nbsp;
            <ek-button color="contrast">Secondary</ek-button>&nbsp;
            <ek-button color="highlight">Accent</ek-button>
        </div>`,
  }),
};

export const Heights = {
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
      content: 'button',
    },
    template: `
        <div  class="flex items-center gap-4">
            <ek-button height="base"  color="base">Primary</ek-button>&nbsp;
            <ek-button height="lg" color="base">Secondary</ek-button>&nbsp;
            <ek-button height="xl" color="base">Accent</ek-button>
        </div>`,
  }),
};

export const States = {
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
      content: 'button',
    },
    template: `
        <div class="flex items-center">
            <ek-button disabled="true">Disabled</ek-button>&nbsp;
            <ek-button loading="true">Loading</ek-button>&nbsp;
            <ek-button skeleton="true">Loading</ek-button>
        </div>`,
  }),
};

export const Icons = {
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
      content: 1,
    },
    template: `
        <div class="flex items-center">
            <ek-button>Camera <i-feather name="camera"></i-feather></ek-button>&nbsp;
            <ek-button><i-feather name="thumbs-up"></i-feather></ek-button>&nbsp;
            <ek-button><i-feather name="heart"></i-feather> Coração</ek-button>&nbsp;
        </div>`,
  }),
};

