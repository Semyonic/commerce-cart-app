import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Menu } from '../shared/types/Menu';
import { Product } from '../shared/types/Product';
import { ProductService } from '../services/product/product.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddToCart } from './store/actions';

@Component({
  selector: 'app-home',
  template: `
    <app-navbar [menu]="myMenu$ | async">
      <app-cart [items]="state"></app-cart>
    </app-navbar>
    <br>
    <div class="row">
      <ng-container *ngFor="let product of products$ | async">
        <div class="col-lg-4">
          <app-product
            (addToCart)="addToCart(product)"
            (removeCart)="removeFromCart(product)"
            [price]="product.price"
            [productHeader]="product.name"
            [productImg]="product.image">
          </app-product>
        </div>
      </ng-container>
    </div>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  state: Product[];
  myMenu$: Observable<Menu[]> = this.service.getMenu();
  products$: Observable<Product[]> = this.service.getAllProducts();

  constructor(private store: Store<{ rootReducer: { cartState } }>, private service: ProductService) {
  }

  public ngOnInit(): void {
    this.store.select(state => state.rootReducer.cartState).subscribe((prod) => {
      this.state = prod;
    });
  }

  addToCart(product: Product): void {
    this.store.dispatch(new AddToCart(product));
  }

  removeFromCart(product: Product): void {
    this.store.dispatch(new AddToCart(product));
  }
}
