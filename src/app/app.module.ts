import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './MyComponents/todo/todo.component';
import { TodosDisplayComponent } from './MyComponents/todos-display/todos-display.component';
import { ToDoCreateComponent } from './MyComponents/to-do-create/to-do-create.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';
import { FooterComponent } from './MyComponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosDisplayComponent,
    ToDoCreateComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
