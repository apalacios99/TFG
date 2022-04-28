import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {E404Component} from "./@core/components/errors/e404.component";
import {E500Component} from "./@core/components/errors/e500.component";
import {RealTimeComponent} from "./@core/components/real-time/real-time.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tiempo-real',
    pathMatch: 'full',
  },
  { path: 'tiempo-real', component: RealTimeComponent, data: { title: 'Datos en tiempo real' } },
  { path: '404', component: E404Component, data: { title: 'Page 404' } },
  { path: '500', component: E500Component, data: { title: 'Page 500' } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
