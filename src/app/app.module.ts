import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { E404Component } from './@core/components/errors/e404.component';
import { E500Component } from './@core/components/errors/e500.component';
import { RealTimeComponent } from './@core/components/real-time/real-time.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import {environment} from "../environments/environment";
import {DatePipe} from "@angular/common";
import { ChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';

import { GoogleApiModule, NgGapiClientConfig, NG_GAPI_CONFIG } from 'ng-gapi';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NgxSpinnerModule} from "ngx-spinner";
import {MatSelectModule} from "@angular/material/select";


const gapiClientConfig: NgGapiClientConfig = { //HcRgakaA7c9E0HK01eqvqveb
  client_id: '266272395464-4330aq73pm5tnlc9fdbnjajh1omcldjf.apps.googleusercontent.com', // your client ID
  discoveryDocs: ['https://content.googleapis.com/discovery/v1/apis/bigquery/v2/rest'],
  // cookie_policy: 'single_host_origin'
  scope: [
    'https://www.googleapis.com/auth/bigquery',
    'https://www.googleapis.com/auth/cloud-platform',
    // 'https://www.googleapis.com/auth/cloud-platform.read-only'
  ].join(' ')
};

@NgModule({
  declarations: [
    AppComponent,
    RealTimeComponent,
    E404Component,
    E500Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    HttpClientModule,
    NgxSliderModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    NgxSpinnerModule,
    MatSelectModule
  ],
  providers: [DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
  bootstrap: [AppComponent]
})
export class AppModule { }
