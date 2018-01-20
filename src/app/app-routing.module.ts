import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SelectedComponent } from './directives/selected.component';
import { TextHighlightComponent } from './directives/text-highlight.component';

const routes: Routes = [
  {path: '', redirectTo: '/selected', pathMatch: 'full'},
  {path: 'selected', component: SelectedComponent},
  {path: 'text-highlight', component: TextHighlightComponent},
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
