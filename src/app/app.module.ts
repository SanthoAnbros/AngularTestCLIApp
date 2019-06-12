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


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    NewFormComponent,
    TestFormComponent
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
    BrowserAnimationsModule
  ],
  providers: [ServicesService, XlservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
