import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly baseUrl: string = environment.apiUrl || 'https://api.thrivewellrx.com/api';

  constructor(private http: HttpClient) {}

  createBooking(payload: any) {
    return this.http.post(`${this.baseUrl}/create-booking`, payload);
  }

  createLegitScriptContact(payload: any) {
    return this.http.post(`${this.baseUrl}/create-contact`, payload);
  }
}
