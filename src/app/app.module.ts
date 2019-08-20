import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { NewFormComponent } from './new-form/new-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';
import { TestFormComponent } from './test-form/test-form.component';
import { XlservicesService } from './Services/xlservices.service';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MaterialCompoComponent } from './material-compo/material-compo.component';
import { HomeComponent } from './home/home.component';
import { MaterialCombo1Component } from './material-combo1/material-combo1.component';
import { NewForm2Component } from './new-form2/new-form2.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { HTTPService } from './Services/http.service';
import { ScrollablePageComponent } from './scrollable-page/scrollable-page.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { ScrollPageDetailsComponent } from './scroll-page-details/scroll-page-details.component';
import { TestCompoComponent } from './test-compo/test-compo.component';
import { TestServiceService } from './Service2/test-service.service';

import {
  OKTA_CONFIG,
  OktaAuthModule
} from '@okta/okta-angular';

import config from './.samples.config'

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    NewFormComponent,
    TestFormComponent,
    MaterialCompoComponent,
    HomeComponent,
    MaterialCombo1Component,
    NewForm2Component,
    NestedFormComponent,
    ScrollablePageComponent,
    ScrollPageDetailsComponent,
    TestCompoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule, 
    MatAutocompleteModule, 
    MatInputModule, 
    MaterialModule,
    InfiniteScrollModule
    
  ],
  providers: [ServicesService, 
    XlservicesService, 
    HTTPService, 
    TestServiceService,
    { provide:OKTA_CONFIG, useValue: config.oidc }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
