import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Product } from '../shared/types/Product';
import { Store } from '@ngrx/store';
import { AddToCart } from '../shared/cart/store/actions';
import { take } from 'rxjs/operators';
import { CartState } from '../shared/cart/store/reducers';
import { ProductState } from './store/reducers';
import { MenuState } from '../shared/navbar/store/reducers';

@Component({
  selector: 'app-home',
  template: `
    <app-navbar [menu]="menuState?.menuItems">
      <app-cart [items]="cartState.product"></app-cart>
    </app-navbar>
    <br>
    <div class="row">
      <ng-container *ngFor="let product of productState?.products">
        <div class="col-lg-4">
          <app-product
            (addToCart)="addToCart(product)"
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

  productState: ProductState;
  cartState: CartState;
  menuState: MenuState;

  constructor(private store: Store<{ appState }>) {
  }

  public ngOnInit(): void {
    this.store.select((state) => state.appState).pipe(take(1))
      .subscribe(({ productState, cartState, menuState }) => {
        this.productState = productState;
        this.cartState = cartState;
        this.menuState = menuState;
      });
  }

  addToCart(product: Product): void {
    this.store.dispatch(new AddToCart(product));
  }
}
