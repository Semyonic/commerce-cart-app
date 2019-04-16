import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../app-config';
import { Environment } from '../../types/Environment';

@Injectable()
export class RestService {
  private header: {} = { 'Content-Type': 'application/json' };

  constructor(private http: HttpClient, private config: AppConfig) {
  }

  get<T>(url: string): Observable<HttpResponse<T>> {
    return this.http.get<T>(this.config.getEnv(Environment.Keys.API) + url, {
      headers: this.header,
      observe: 'response'
    });
  }

  post<T>(url: string, request: any): Observable<T | HttpResponse<T>> {
    return this.http.post<T>(`${this.config.getEnv(Environment.Keys.API)}/${url}`, request, {
      headers: this.header,
      observe: 'response'
    });
  }

  put<T>(url: string, request: any): Observable<HttpResponse<T>> {
    return this.http.put<T>(`${this.config.getEnv(Environment.Keys.API)}/${url}`, request, {
      headers: this.header,
      observe: 'response'
    });
  }

  delete<T>(url: string): Observable<HttpResponse<T>> {
    return this.http.delete<T>(`${this.config.getEnv(Environment.Keys.API)}/${url}`, {
      headers: this.header,
      observe: 'response'
    });
  }
}
