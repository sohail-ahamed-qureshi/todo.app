import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { TodoComponent } from './MyComponents/todo/todo.component';

const routes: Routes = [
  {path:'home', component: TodoComponent},
  { path: 'about', component:AboutComponent},
  {path:'', pathMatch:'full', redirectTo: 'home'},
  { path: '**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
