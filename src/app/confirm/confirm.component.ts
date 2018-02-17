import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm',
  template: `
    <header>Click the buttons to see the confirmation message.</header>
    <p>
      <button [appConfirm]="'Are you sure you want to change the color to blue?'"
              [functionToRun]="setBoxColor('dodgerblue')"
              [disabled]="boxColor==='dodgerblue'">
        Blue
      </button>
      <button appConfirm="Are you sure you want to change the color to red?"
              [functionToRun]="setBoxColor('crimson')"
              [disabled]="boxColor==='crimson'">
        Red
      </button>
    </p>
    <div [style.backgroundColor]="boxColor"
         class="box">
    </div>
  `,
  styles: [`
    div.box {
      height: 50px;
      width: 210px;
    }
  `]
})
export class ConfirmComponent {
  boxColor = 'dodgerblue';

  setBoxColor(color: string) {
    return () => this.boxColor = color;
  }
}
