import { Component } from '@angular/core';
import { GlossaryTerm } from './glossary-term';

@Component({
  selector: 'app-glossary',
  template: `
    <p [appGlossary]="glossary">
      TypeScript is a free and open-source programming language developed
      and maintained by Microsoft. It is a strict syntactical superset of
      JavaScript, and adds optional static typing to the language. Anders Hejlsberg,
      lead architect of C# and creator of Delphi and Turbo Pascal, has worked on
      the development of TypeScript. TypeScript may be used to develop JavaScript
      applications for client-side or server-side (Node.js) execution.
      TypeScript is designed for development of large applications and compiles to
      JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript
      programs are also valid TypeScript programs.
    </p>
  `
})
export class GlossaryComponent {
  glossary: GlossaryTerm[] = [
    new GlossaryTerm(
      'JavaScript',
      'A high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language.'
    ),
    new GlossaryTerm(
      'Node.js',
      'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
    ),
    new GlossaryTerm(
      'open-source',
      'Software for which the original source code is made freely available and may be redistributed and modified.'
    ),
    new GlossaryTerm(
      'superset',
      'A group of commands or functions that exceed the capabilities of the original specification.'
    )
  ];
}
