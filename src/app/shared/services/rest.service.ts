import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../types/Settings';
import { ConfigService } from './config.service';

@Injectable()
export class RestService {
  private readonly environment: Environment;
  private header: {} = { 'Content-Type': 'application/json' };

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {
    this.environment = this.configService.environment;
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.environment.API + url, {
      headers: this.header
    });
  }

  post<T>(url: string, request: any): Observable<T> {
    return this.http.post<T>(this.environment.API + url, request, {
      headers: this.header
    });
  }

  put<T>(url: string, request: any): Observable<T> {
    return this.http.put<T>(this.environment.API + url, request, {
      headers: this.header
    });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.environment.API + url, {
      headers: this.header
    });
  }
}
