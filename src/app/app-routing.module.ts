import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewFormComponent } from './new-form/new-form.component';
import { TestFormComponent } from './test-form/test-form.component';
import { MaterialCompoComponent } from './material-compo/material-compo.component';
import { HomeComponent } from './home/home.component';
import { MaterialCombo1Component } from './material-combo1/material-combo1.component';
import { NewForm2Component } from './new-form2/new-form2.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ScrollablePageComponent } from './scrollable-page/scrollable-page.component';
import { ScrollPageDetailsComponent } from './scroll-page-details/scroll-page-details.component';
import { TestCompoComponent } from './test-compo/test-compo.component';

import { OktaAuthModule, OktaAuthGuard, OktaCallbackComponent} from '@okta/okta-angular'


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'implicit/callback', component:OktaCallbackComponent},
  {path:'new-form', component: NewFormComponent, canActivate : [OktaAuthGuard]},
  {path:'TestForm', component: TestFormComponent},
  {path:'NewForm2', component: NewForm2Component},
  {path:'MatCombo', component:MaterialCompoComponent},
  {path:'MatCombo1', component: MaterialCombo1Component},
  {path:'NestedForm', component:NestedFormComponent},
  {path: 'scrollPage', component:ScrollablePageComponent},
  {path: 'scrollPageDet/:id', component:ScrollPageDetailsComponent},
  {path:'TestComp', component:TestCompoComponent}
];

@NgModule({
  imports: [
    OktaAuthModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
