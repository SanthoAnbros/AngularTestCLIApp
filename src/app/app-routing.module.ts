import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewFormComponent } from './new-form/new-form.component';
import { TestFormComponent } from './test-form/test-form.component';


const routes: Routes = [
  {path:'new-form', component: NewFormComponent},
  {path:'TestForm', component: TestFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
