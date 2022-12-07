import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodosComponent} from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
    //you can add components here in Declaratios, so you can use them
  ],
  imports: [
    //by adding the modules here which are imported/defined in the upper part of this file you can use them
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
