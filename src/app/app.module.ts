import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToggleParaComponent } from './toggle/toggle-para.component';
import { TextHighlightComponent } from './text-highlight/text-highlight.component';
import { TextHighlightDirective } from './text-highlight/text-highlight.directive';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmDirective } from './confirm/confirm.directive';
import { StatsDirective } from './stats/stats.directive';
import { TocComponent } from './toc/toc.component';
import { TocDirective } from './toc/toc.directive';
import { TextSnippetComponent } from './text-snippets/text-snippets.component';
import { TextSnippetDirective } from './text-snippets/text-snippets.directive';
import { GlossaryComponent } from './glossary/glossary.component';
import { GlossaryDirective } from './glossary/glossary.directive';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { StarRatingDirective } from './star-rating/star-rating.directive';
import { EditableComponent } from './editable/editable.component';
import { EditableItemDirective } from './editable/editable-item.directive';
import { EditableGroupDirective } from './editable/editable-group.directive';
import { GroupFocusDirective } from './focus/group-focus.directive';
import { ItemFocusDirective } from './focus/item-focus.directive';
import { ItemFocusComponent } from './focus/item-focus.component';
import { GroupFocusComponent } from './focus/group-focus.component';
import { ButtonDirective } from './grouping/button.directive';
import { GroupComponent } from './grouping/group.component';
import { ParaDirective } from './grouping/para.directive';
import { GroupDirective } from './grouping/group.directive';
import { ToggleButtonComponent } from './toggle/toggle-button.component';
import { ToggleButtonDirective } from './toggle/toggle.directive';
import { ToggleParaWithStatsComponent } from './stats/toggle-para-with-stats.component';
import { HostComponent } from './host/host.component';
import { InputDirective } from './host/input.directive';
import { ContainerDirective } from './host/container.directive';
import { TocSimpleComponent } from './toc/toc-simple.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonDirective,
    ConfirmComponent,
    ConfirmDirective,
    ContainerDirective,
    EditableComponent,
    EditableGroupDirective,
    EditableItemDirective,
    GlossaryComponent,
    GlossaryDirective,
    GroupComponent,
    GroupDirective,
    GroupFocusComponent,
    GroupFocusDirective,
    HostComponent,
    InputDirective,
    ItemFocusDirective,
    ItemFocusComponent,
    ParaDirective,
    ToggleParaComponent,
    StarRatingComponent,
    StarRatingDirective,
    StatsDirective,
    TextHighlightComponent,
    TextHighlightDirective,
    TextSnippetComponent,
    TextSnippetDirective,
    TocComponent,
    TocDirective,
    ToggleButtonComponent,
    ToggleButtonDirective,
    ToggleParaComponent,
    ToggleParaWithStatsComponent,
    InputDirective,
    TocSimpleComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
