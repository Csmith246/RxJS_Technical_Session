import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RxjsExamplesComponent } from './rxjs-examples/rxjs-examples.component';
import { OperatorsComponent } from './operators/operators.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { SubjectsComponent } from './subjects/subjects.component';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    RxjsExamplesComponent,
    OperatorsComponent,
    TypeaheadComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
