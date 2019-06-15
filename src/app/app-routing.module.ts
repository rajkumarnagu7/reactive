import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { UserformComponent } from './userform/userform.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {path:'',component:ExampleComponent},
  {path:'example/:a',component:ExampleComponent},
  /* {path:'userform',component:UserformComponent}, */
  {path:'userdetails',component:UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
