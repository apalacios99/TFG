import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RealTimeComponent} from "./@core/components/real-time/real-time.component";
import {LoginComponent} from "./@core/components/login/login.component";
import {NoUserGuard} from "./@core/guards/no-user.guard";
import {UserGuard} from "./@core/guards/user.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tiempo-real',
    pathMatch: 'full',
  },
  { path: 'tiempo-real', component: RealTimeComponent, canActivate: [UserGuard], data: { title: 'Tiempo real' } },
  { path: 'iniciar-sesion', component: LoginComponent, canActivate: [NoUserGuard], data: { title: 'Iniciar sesión' } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
