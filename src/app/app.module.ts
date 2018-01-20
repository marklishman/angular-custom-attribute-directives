import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SelectedDirective } from './selected/selected.directive';
import { AppRoutingModule } from './app-routing.module';
import { SelectedComponent } from './selected/selected.component';
import { TextHighlightComponent } from './text-highlight/text-highlight.component';
import { TextHighlightDirective } from './text-highlight/text-highlight.directive';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmDirective } from './confirm/confirm.directive';
import { StatsComponent } from './stats/stats.component';
import { StatsDirective } from './stats/stats.directive';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent,
    ConfirmDirective,
    TextHighlightComponent,
    TextHighlightDirective,
    SelectedComponent,
    SelectedDirective,
    StatsComponent,
    StatsDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
