import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>Click on paragraphs to toggle selection</header>
    <p appToggle *ngFor="let para of paras">
      {{para}}
    </p>
  `,
  styles: [`
    p {
      color: DarkGray;
      cursor: pointer;
    }
    p.selected {
       color: Black;
       border: 1px solid DimGray;
       padding: 9px;
     }
  `]
})
export class ToggleParaComponent {
  paras: string[] = [
    'Angular turns your templates into code that\'s highly optimized for today\'s JavaScript virtual machines, ' +
    'giving you all the benefits of hand-written code with the productivity of a framework.',
    'Serve the first view of your application on node.js, .NET, PHP, and other servers for near-instant ' +
    'rendering in just HTML and CSS. Also paves the way for sites that optimize for SEO.',
    'Angular apps load quickly with the new Component Router, which delivers automatic code-splitting ' +
    'so users only load code required to render the view they request.'
    ];
}
