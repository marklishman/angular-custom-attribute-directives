import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  template: `
    <div appStats>
      The first rule of Fight Club is: You do not talk about Fight Club.
      The second rule of Fight Club is: You do not talk about Fight Club.
      Third rule of Fight Club: someone yells stop, goes limp, taps out, the fight is over.
      Fourth rule: only two guys to a fight. Fifth rule: one fight at a time, fellas.
      Sixth rule: no shirts, no shoes.
      Seventh rule: fights will go on as long as they have to.
      And the eighth and final rule: if this is your first night at Fight Club, you have to fight.
    </div>
    <div>
      <span appStats>
        Hey, you created me. I didn't create some loser alter-ego to make myself feel better.
        Take some responsibility!
      </span>
    </div>
    <p>Hover your mouse over the paragraphs to see the stats</p>
  `,
  styles: [`
    p {
      color: green;
      font-size: 20px;
      margin-top: 0;
    }
  `]
})
export class StatsComponent {
}
