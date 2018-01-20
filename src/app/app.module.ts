import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SelectedDirective } from './selected/selected.directive';
import { AppRoutingModule } from './app-routing.module';
import { SelectedComponent } from './selected/selected.component';
import { TextHighlightComponent } from './text-highlight/text-highlight.component';
import { TextHighlightDirective } from './text-highlight/text-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    SelectedComponent,
    SelectedDirective,
    TextHighlightComponent,
    TextHighlightDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
