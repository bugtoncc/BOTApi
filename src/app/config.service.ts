import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ICategory } from './ICategory';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configUrl = 'https://apigw1.bot.or.th/bot/public/categorylist/category_list/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-ibm-client-id': '8609ed57-59e6-4864-b412-9e38b120345f',
    }),
  };

  constructor(private http: HttpClient) {}

  getData(): Observable<ICategory> {
    return this.http.get<ICategory>(this.configUrl, this.httpOptions);
  }
}
