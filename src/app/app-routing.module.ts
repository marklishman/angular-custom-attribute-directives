import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ToggleParaComponent } from './toggle/toggle-para.component';
import { TextHighlightComponent } from './text-highlight/text-highlight.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { StatsComponent } from './stats/stats.component';
import { TocComponent } from './toc/toc.component';
import { TextSnippetComponent } from './text-snippets/text-snippets.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { EditableComponent } from './editable/editable.component';
import { ItemFocusComponent } from './focus/item-focus.component';
import { GroupFocusComponent } from './focus/group-focus.component';
import { GroupComponent } from './grouping/group.component';
import { ToggleButtonComponent } from './toggle/toggle-button.component';

const routes: Routes = [
  {path: '', redirectTo: '/toggle-button', pathMatch: 'full'},
  {path: 'toggle-button', component: ToggleButtonComponent},
  {path: 'toggle-para', component: ToggleParaComponent},
  {path: 'text-highlight', component: TextHighlightComponent},
  {path: 'text-snippets', component: TextSnippetComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'toc', component: TocComponent},
  {path: 'glossary', component: GlossaryComponent},
  {path: 'star-rating', component: StarRatingComponent},
  {path: 'editable', component: EditableComponent},
  {path: 'item-focus', component: ItemFocusComponent},
  {path: 'group-focus', component: GroupFocusComponent},
  {path: 'group', component: GroupComponent},
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
