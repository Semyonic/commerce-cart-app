import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private header: {} = { 'Content-Type': 'application/json' };

  constructor(private http: HttpClient) {}

  getMenu(): Observable<any> {
    return this.http.get(`${environment.API}/menu`, {
      headers: this.header,
      observe: 'response'
    });
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${environment.API}/products`, {
      headers: this.header,
      observe: 'response'
    });
  }
}
