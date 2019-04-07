import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { forkJoin, Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { ProductService } from '../../services/product/product.service';
import { GetProducts } from '../../home/store/actions';
import { ProductState } from '../../home/store/reducers';
import { Product } from '../types/Product';
import { Menu } from '../types/Menu';
import { GetMenu } from '../navbar/store/actions';

@Injectable()
export class ProductResolver implements Resolve<ProductState> {
  constructor(
    private service: ProductService,
    private store: Store<{ appState: { productState, menuState } }>) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.getData().pipe(tap((response: Observable<Product[]> | Observable<Menu[]>) => {
      this.store.dispatch(new GetProducts(response[0]));
      this.store.dispatch(new GetMenu(response[1]));
    }));
  }

  private getData(): Observable<any> {
    const products: Observable<Product[]> = this.service.getAllProducts().pipe(pluck('body'));
    const menus: Observable<Menu[]> = this.service.getMenu().pipe(pluck('body'));
    return forkJoin([products, menus]);
  }
}
