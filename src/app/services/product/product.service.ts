import { Injectable } from '@angular/core';
import { RestService } from '../../shared/services/rest.service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/types/Product';
import { Menu } from '../../shared/types/Menu';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: RestService) {
  }

  getMenu(): Observable<Menu[]> {
    return this.http.get('/menu');
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get(`/products`);
  }
}
