import { Meta } from '@storybook/angular';
import { TextComponent } from './text.component';

export default {
  title: 'Text / Text',
  component: TextComponent,
} as Meta<TextComponent>;

export const Text = {
  render: (args: TextComponent) => ({
    props: args,
    template: `
        <div>
            <div ekDivider="lg"><ek-text  type="title">Leis de Newton</ek-text></div>

            <div><ek-text type="quote" background="base" color="white" [italic]="true">Esse é um texto de exemplo</ek-text></div>

            <div>
                <ek-text type="subtitle">Primeira lei de Newton | </ek-text>
                <ek-text type="subtitle"  [bold]="true">Inércia</ek-text>
            </div>

            <div>
             <ek-text type="paragraph">A primeira lei de Newton, também conhecida como a <ek-text [bold]="true">lei da inércia</ek-text>,
            afirma que um objeto em repouso permanecerá em repouso e um objeto em movimento continuará
            em movimento com velocidade constante em linha reta, a menos que uma força externa seja aplicada sobre ele.</ek-text>
        </div>
</div>
    `,
  }),
};
export const TextOptions = {
  render: (args: TextComponent) => ({
    props: args,
    template: `
        <div>
            <div>
                <ek-text type="title">Title</ek-text>
            </div>
            <div>
                <ek-text type="subtitle">Subtitle</ek-text>
            </div>
            <div>
                <ek-text type="section">Section</ek-text>
            </div>
            <div>
                <ek-text type="paragraph">Paragraph</ek-text>
            </div>
            <div>
                <ek-text type="code">Code</ek-text>
            </div>
            <div>
                <ek-text type="quote">Quote</ek-text>
            </div>
        </div>
    `,
  }),
};

export const TextStates = {
  render: (args: TextComponent) => ({
    props: args,
    template: `
        <div>
           <div>
                <ek-text [bold]="true" type="paragraph">Paragraph bold</ek-text>
           </div>
           <div>
                <ek-text [italic]="true" type="paragraph">Paragraph italic</ek-text>
            </div>
             <div>
                <ek-text skeletonWidth="300px" [skeleton]="true"></ek-text>
            </div>
        </div>
    `,
  }),
};

export const TextColors = {
  render: (args: TextComponent) => ({
    props: args,
    template: `
        <div>
           <div>
                <ek-text color="base">Paragraph base</ek-text>
            </div>
           <div>
              <ek-text color="highlight">Paragraph highlight</ek-text>
            </div>
            <div>
              <ek-text color="contrast">Paragraph contrast</ek-text>
            </div>
            <div>
              <ek-text color="black">Paragraph black</ek-text>
            </div>
            <div>
              <ek-text  background="base" color="white">Paragraph white</ek-text>
            </div>
        </div>
    `,
  }),
};


