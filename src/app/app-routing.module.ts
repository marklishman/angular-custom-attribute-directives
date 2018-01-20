import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SelectedComponent } from './selected/selected.component';
import { TextHighlightComponent } from './text-highlight/text-highlight.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {path: '', redirectTo: '/selected', pathMatch: 'full'},
  {path: 'selected', component: SelectedComponent},
  {path: 'text-highlight', component: TextHighlightComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'stats', component: StatsComponent},
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
