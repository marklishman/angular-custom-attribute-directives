import { Component } from '@angular/core';

@Component({
  selector: 'app-glossary',
  template: `
    <header>Hover your mouse over the colored text to see a definition</header>
    <p [appGlossary]="glossaryTerms">
      {{techieText}}
    </p>
  `
})
export class GlossaryComponent {

  techieText = `
      TypeScript is a free and open-source programming language developed
      and maintained by Microsoft. It is a strict syntactical superset of
      JavaScript, and adds optional static typing to the language. Anders Hejlsberg,
      lead architect of C# and creator of Delphi and Turbo Pascal, has worked on
      the development of TypeScript. TypeScript may be used to develop JavaScript
      applications for client-side or server-side (Node.js) execution.
      TypeScript is designed for development of large applications and compiles to
      JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript
      programs are also valid TypeScript programs.`;

  glossaryTerms: {[term: string]: string} = {
    'JavaScript':   'A high-level, dynamic, weakly typed, prototype-based, multi-paradigm, ' +
                    'and interpreted programming language.',
    'Node.js':      'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    'open-source':  'Software for which the original source code is made freely available and ' +
                    'may be redistributed and modified.',
    'superset':     'A group of commands or functions that exceed the capabilities of the ' +
                    'original specification.',
  };
}
