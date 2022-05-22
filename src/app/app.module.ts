import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealTimeComponent } from './@core/components/real-time/real-time.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import {environment} from "../environments/environment";
import {DatePipe} from "@angular/common";
import { ChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';

import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NgxSpinnerModule} from "ngx-spinner";
import {MatSelectModule} from "@angular/material/select";
import { LoginComponent } from './@core/components/login/login.component';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {LoginService} from "./@core/services/auth/login.service";

@NgModule({
  declarations: [
    AppComponent,
    RealTimeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
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
    LoginService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
  bootstrap: [AppComponent]
})
export class AppModule { }
