import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesFormService {
  private apiUrl =
    'https://script.google.com/macros/s/AKfycby96QHSEB_D3tOmiTWjzsU68cujeYwlp98xc5t7nKs8ORGzMvKrLCFBqe0ZH0ZEM8Xx/exec';

  constructor(private _HttpClient: HttpClient) {}

  sendMessage(data: any): Observable<any> {
    return this._HttpClient.post(this.apiUrl, JSON.stringify(data));
  }
}
