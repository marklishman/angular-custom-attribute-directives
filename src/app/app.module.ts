import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SelectedDirective } from './directives/selected.directive';
import { AppRoutingModule } from './app-routing.module';
import { SelectedComponent } from './directives/selected.component';
import { TextHighlightComponent } from './directives/text-highlight.component';
import { TextHighlightDirective } from './directives/text-highlight.directive';


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
