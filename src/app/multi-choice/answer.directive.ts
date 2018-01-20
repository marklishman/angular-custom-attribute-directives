import { Directive } from '@angular/core';
import { QuestionDirective } from './question.directive';

@Directive({
  selector: '[appAnswer]'
})
export class AnswerDirective {

  constructor(parent: QuestionDirective) {
    console.log(parent.prop);
  }

}
