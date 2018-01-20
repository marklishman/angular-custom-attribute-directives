import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-choice',
  template: `
    <p appQuestion>The Eiffel Tower is located where in Paris?</p>
    <div appAnswer>Bois de Boulogne</div>
    <div appAnswer>Champ de Mars</div>
    <div appAnswer>Jardin des Plantes</div>
    <div appAnswer>Parc de Belleville</div>
  `,
  styles: []
})
export class MultiChoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
