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
import { TocComponent } from './toc/toc.component';
import { TocDirective } from './toc/toc.directive';
import { TextSnippetComponent } from './text-snippets/text-snippets.component';
import { TextSnippetDirective } from './text-snippets/text-snippets.directive';
import { GlossaryComponent } from './glossary/glossary.component';
import { GlossaryDirective } from './glossary/glossary.directive';
import { MultiChoiceComponent } from './multi-choice/multi-choice.component';
import { QuestionDirective } from './multi-choice/question.directive';
import { AnswerDirective } from './multi-choice/answer.directive';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { StarRatingDirective } from './star-rating/star-rating.directive';
import { EditableComponent } from './editable/editable.component';
import { EditableItemDirective } from './editable/editable-item.directive';
import { EditableGroupDirective } from './editable/editable-group.directive';
import { GroupFocusDirective } from './focus/group-focus.directive';
import { ItemFocusDirective } from './focus/item-focus.directive';
import { ItemFocusComponent } from './focus/item-focus.component';
import { GroupFocusComponent } from './focus/group-focus.component';


@NgModule({
  declarations: [
    AnswerDirective,
    AppComponent,
    ConfirmComponent,
    ConfirmDirective,
    EditableComponent,
    EditableGroupDirective,
    EditableItemDirective,
    GlossaryComponent,
    GlossaryDirective,
    GroupFocusComponent,
    GroupFocusDirective,
    ItemFocusDirective,
    ItemFocusComponent,
    MultiChoiceComponent,
    QuestionDirective,
    SelectedComponent,
    SelectedDirective,
    StatsComponent,
    StarRatingComponent,
    StarRatingDirective,
    StatsDirective,
    TextHighlightComponent,
    TextHighlightDirective,
    TextSnippetComponent,
    TextSnippetDirective,
    TocComponent,
    TocDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
