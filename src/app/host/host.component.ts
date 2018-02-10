import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  template: `
    <header>
      <ul>
        <li>Mouse over box to change color, mouse out to change back</li>
        <li>Click box to keep color, double click to remove color</li>
        <li>Enter text boxes to see border, use esc key to remove border</li>
        <li>Click Disable button to toggle enable / disable</li>
      </ul>
    </header>
    <article>
      <section class="container">
        <input type="text">
        <input type="text">
        <input type="text">
      </section>
      <div>
        <button #lock
                (click)="lock.innerText = lock.innerText === 'Lock' ? 'Unlock' : 'Lock'"
                id="lock">
          Lock
        </button>
        <button #show
                (click)="show.innerText = show.innerText === 'Show' ? 'Hide' : 'Show'"
                id="show">
          Hide
        </button>
      </div>
    </article>
  `,
  styles: [`
    section.container {
      border: 1px solid DimGray;
      display: inline-block;
      height: 24px;
      margin-left: 20px;
      padding: 30px 20px;
      width: 530px;
    }
    input {
      outline: none;
    }
    article, article div {
      display: flex;
    }
    article div {
      flex-direction: column;
      justify-content: space-between;
    }
  `]
})
export class HostComponent {
}
