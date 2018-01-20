import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-choice',
  template: `
    <div appQuestion>The Eiffel Tower is located where in Paris?
      <div appAnswer>Bois de Boulogne</div>
      <div appAnswer>Champ de Mars</div>
      <div appAnswer>Jardin des Plantes</div>
      <div appAnswer>Parc de Belleville</div>
    </div>
  `,
  styles: []
})
export class MultiChoiceComponent {
}
