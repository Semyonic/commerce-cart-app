import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AddToCart } from '../shared/cart/store/actions';
import { CartState } from '../shared/cart/store/reducers';
import { MenuState } from '../shared/navbar/store/reducers';
import { Product } from '../shared/types/Product';
import { ProductState } from './store/reducers';

@Component({
  selector: 'app-home',
  template: `
    <app-navbar id="navbar" [menu]="menuState?.menuItems">
      <app-cart id="cart" [items]="cartState.product"></app-cart>
    </app-navbar>
    <br>
    <div class="row" id="products">
      <ng-container *ngFor="let product of productState?.products; let i=index;">
        <div id="product-card-{{product.id}}" class="col-lg-4">
          <app-product
            [id]="i"
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
