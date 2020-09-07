import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ICategoryList } from './Interface/ICategoryList';
import { ISeriesList } from './Interface/ISeriesList';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  categoryUrl = 'https://apigw1.bot.or.th/bot/public/categorylist';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-ibm-client-id': '8609ed57-59e6-4864-b412-9e38b120345f',
    }),
  };

  constructor(private http: HttpClient) {}

  getCategoryList(): Observable<ICategoryList> {
    return this.http.get<ICategoryList>(
      this.categoryUrl + '/category_list/',
      this.httpOptions
    );
  }

  getSeriesList(category: string): Observable<ISeriesList> {
    return this.http.get<ISeriesList>(
      this.categoryUrl + '/series_list/?category=' + category,
      this.httpOptions
    );
  }
}
