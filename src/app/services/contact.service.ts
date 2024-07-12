import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url: string = 'http://192.168.12.95:8081/api/create-booking';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  createBooking(payload: any) {
    return this.http.post(url, payload);
  }
}
