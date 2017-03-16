import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { passwordService } from './services/passwordService';
import { roomateService } from './services/roomateService';
import { RoomateformComponent } from './roomateform/roomateform.component';
import { PasswordComponent,passwordDialog } from './password/password.component';
import { RoomatetabsComponent } from './roomatetabs/roomatetabs.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomateformComponent,
    passwordDialog,
    PasswordComponent,
    RoomatetabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [passwordService,roomateService],
  bootstrap: [AppComponent],
  entryComponents: [
    passwordDialog
  ]
  
})
export class AppModule { }
