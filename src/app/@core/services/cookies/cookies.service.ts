import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpHeaders} from "@angular/common/http";

const googleHeader = 'HEADERS'
const expiredHeaders = 'EXPIRED_HEADERS'
@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookieService: CookieService) { }
  headers = new HttpHeaders();

  setExpiredDate(time: Date){
    this.cookieService.set(expiredHeaders, time.toString(), 7);
  }

  getExpiredDate(): Date{
    if (this.cookieService.get(expiredHeaders) === '' || this.cookieService.get(expiredHeaders) == null) {
      return null;
    } else {
      return new Date(this.cookieService.get(expiredHeaders));
    }
  }

  setGoogleToken(token){
    this.cookieService.set(googleHeader, token, 7);
  }

  getGoogleToken() {
    if (this.cookieService.get(googleHeader) === '' || this.cookieService.get(googleHeader) == null) {
      return null;
    } else {
      return this.cookieService.get(googleHeader);
    }
  }
}
