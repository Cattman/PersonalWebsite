import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppTopBarComponent } from './top-bar/app.top-bar.component';
import { AppTopMenuComponent } from './top-menu/app.top-menu.component';
import { AppHomePageComponent } from './home-page/app.home-page.component';
import { AppContactPageComponent } from './contact-page/app.contact-page.component';
import { AppAboutPageComponent } from './about-page/app.about-page.component';
import { AppProjectsPageComponent } from './projects-page/app.projects-page.component';

import { AppRoutingModule } from './app-routing.module';
import {CookieService} from 'ngx-cookie-service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { WeddingComponent } from './wedding/wedding.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    AppTopMenuComponent,
    AppHomePageComponent,
    AppContactPageComponent,
    AppAboutPageComponent,
    AppProjectsPageComponent,
    NavBarComponent,
    WeddingComponent
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
