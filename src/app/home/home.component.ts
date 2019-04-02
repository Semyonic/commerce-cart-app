import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { IMenu } from '../shared/types/Menu';
import { Product } from '../shared/types/Product';
import { ProductService } from '../services/product/product.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CartState } from './store/reducers';
import { AddToCart } from './store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  state: CartState;
  myMenu: IMenu[] = [{ href: '', text: 'Home' }, { href: 'products', text: 'Products' }];
  products$: Observable<Product[]> = this.service.getAllProducts();

  constructor(private store: Store<{ rootReducer: { cartState: CartState } }>, private service: ProductService) {
  }

  public ngOnInit(): void {
    this.store.select(state => state.rootReducer.cartState).subscribe((state => this.state = state));
  }

  addToCart(product: Product): void {
    this.store.dispatch(new AddToCart(product));
  }

  showCart(): void {
    console.warn({ ...this.state });
  }
}
