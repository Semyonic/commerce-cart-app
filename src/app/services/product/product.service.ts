import { Injectable } from '@angular/core';
import { RestService } from '../../shared/services/rest.service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: RestService) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get(`/products`);
  }
}
