import { Component } from '@angular/core';

@Component({
  selector: 'app-toc-simple',
  template: `
    <header>Hover your mouse over the text above to see the TOC.</header>
    <div appToc>

      <h1>Angular Property Binding</h1>
      <p>Use template expressions to bind to DOM properties such as hidden and title on
        standard HTML elements such as div and span.</p>

      <h2>Property Binding with Square Brackets</h2>
      <p>We specify one-way bindings to DOM properties using square brackets and template expressions...</p>

      <h3>The Application</h3>
      <p>Here is the output from this component...</p>

      <h2>Template Expression</h2>
      <p>Let's look at some examples of the type of template expressions...</p>

      <h3>Binding Syntax</h3>
      <p>Let's look at the different ways we can set properties and attributes on an element...</p>
      <h4>Using Square Brackets</h4>
      <p>Property bindings using square brackets...</p>
      <h4>The bind- syntax</h4>
      <p>We can also use the bind- syntax...</p>

    </div>
  `,
  styles: [`
    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      padding: 2px;
    }
  `]
})
export class TocSimpleComponent{
}
