import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesFormService {
  private apiUrl =
    'https://script.google.com/macros/s/AKfycbwDt_-MKaBqZ8HdA3eTq5cEMLpFRxRfEzS6cjBD2Zz0zAbw-8EgNipgoQAbLRNDOKQu/exec';

  constructor(private _HttpClient: HttpClient) {}

  sendMessage(data: any): Observable<any> {
    return this._HttpClient.post(this.apiUrl, JSON.stringify(data));
  }
}
