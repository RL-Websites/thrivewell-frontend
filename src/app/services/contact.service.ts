import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url: string = 'http://thrivewell.aligndentalcare.com/api/create-booking';
const legitUrl: string =
  'http://thrivewell.aligndentalcare.com/api/create-contact';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  createBooking(payload: any) {
    return this.http.post(url, payload);
  }

  createLegitScriptContact(payload: any) {
    return this.http.post(legitUrl, payload);
  }
}
