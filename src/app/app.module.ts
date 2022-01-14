import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { ClarityModule } from '@clr/angular';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainBodyComponent } from './main-body/main-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    MainBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
