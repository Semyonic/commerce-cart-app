import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../shared/services/rest/rest.service';
import { Menu } from '../../shared/types/Menu';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: RestService) {
  }

  getMenu(): Observable<any> {
    return this.http.get<Menu>(`/menu`);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`/products`);
  }
}
