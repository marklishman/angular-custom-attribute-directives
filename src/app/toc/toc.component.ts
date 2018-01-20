import { Component } from '@angular/core';

@Component({
  selector: 'app-toc',
  template: `
    <header>Hover your mouse over the text above to see the TOC</header>
    <div appToc>
      <h1>first heading 1</h1>
      <h2>first heading 2</h2>
      <p>para one</p>
      <h2>second heading 2</h2>
      <p>para two</p>
      <h3>first heading 3</h3>
      <p>para three</p>
      <h4>first heading 4</h4>
      <p>para four</p>
      <h5>first heading 5</h5>
      <p>para five</p>
      <h5>second heading 5</h5>
      <p>para six</p>
      <h6>first heading 6</h6>
      <p>para seven</p>
      <h2>third heading 2</h2>
      <p>para eight</p>
      <h3>second heading 3</h3>
      <p>para nine</p>
      <h4>second heading 4</h4>
      <p>para ten</p>
    </div>
  `,
  styles: [`
    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      padding: 2px;
    }
  `]
})
export class TocComponent {
}
