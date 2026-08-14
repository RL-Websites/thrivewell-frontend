import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly apiBaseUrl = environment.apiBaseUrl.replace(/\/$/, '');

  constructor(private http: HttpClient) {}

  createBooking(payload: any) {
    return this.http.post(`${this.apiBaseUrl}/create-booking`, payload);
  }

  createLegitScriptContact(payload: any) {
    return this.http.post(`${this.apiBaseUrl}/create-contact`, payload);
  }
}
