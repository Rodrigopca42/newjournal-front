import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NovaNoticiaComponent } from './components/pages/nova-noticia/nova-noticia.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'', component: NavComponent, children: [
    {path: 'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'noticia/nova', component: NovaNoticiaComponent}
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
