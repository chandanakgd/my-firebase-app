import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule,AngularFireDatabase} from 'angularfire2/database'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import {AfService} from './providers/af.service'
import {AppRoutingModule} from './app-routing.module';
import { PageOneComponent } from './page-one/page-one.component';
import {AdminGuard} from './guard/admin.guard'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageOneComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [AfService,AngularFireAuth,AngularFirestore,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
