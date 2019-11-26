import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppAboutPageComponent} from './about-page/app.about-page.component';
import {AppHomePageComponent} from './home-page/app.home-page.component';
import {AppProjectsPageComponent} from './projects-page/app.projects-page.component';
import {AppContactPageComponent} from './contact-page/app.contact-page.component';

const routes: Routes = [
    {path: 'about', component: AppAboutPageComponent},
    {path: 'projects', component: AppProjectsPageComponent},
    {path: 'contact', component: AppContactPageComponent},
    {path: 'home', component: AppHomePageComponent},
    {path: '', component: AppHomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
