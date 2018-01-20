import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SelectedComponent } from './selected/selected.component';
import { TextHighlightComponent } from './text-highlight/text-highlight.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { StatsComponent } from './stats/stats.component';
import { TocComponent } from './toc/toc.component';
import { TextSnippetComponent } from './text-snippets/text-snippets.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { MultiChoiceComponent } from './multi-choice/multi-choice.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { EditableComponent } from './editable/editable.component';

const routes: Routes = [
  {path: '', redirectTo: '/selected', pathMatch: 'full'},
  {path: 'selected', component: SelectedComponent},
  {path: 'text-highlight', component: TextHighlightComponent},
  {path: 'text-snippets', component: TextSnippetComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'toc', component: TocComponent},
  {path: 'glossary', component: GlossaryComponent},
  {path: 'multi-choice', component: MultiChoiceComponent},
  {path: 'star-rating', component: StarRatingComponent},
  {path: 'editable', component: EditableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppRoutingModule {
}
