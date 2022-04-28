import {Component, OnInit} from '@angular/core';
import {CookiesService} from "./@core/services/cookies/cookies.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'dashboard';
  showMenu = false;
  realtime = false;
  historical = false;
  isMobile = false;
  interval;
  constructor(private cookieService: CookiesService, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd && this.router.url !== '/') {
        if (this.router.url === '/tiempo-real'){
          this.realtime = true;
          this.historical = false;
        } else {
          this.historical = true;
          this.realtime = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 700;
  }
}
