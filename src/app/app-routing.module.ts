import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutPageComponent} from './about-page/about-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';

const routes: Routes = [
    {path: 'about', component: AboutPageComponent},
    {path: 'projects', component: ProjectsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'home', component: HomePageComponent},
    {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
