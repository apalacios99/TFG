import {Component} from '@angular/core';
import {LoginService} from "./@core/services/auth/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Aplicación Alejandra Palacios';

  constructor(public loginService: LoginService) {
  }
}
