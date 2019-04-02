import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { ProductService } from './services/product/product.service';
import { Product } from './shared/types/Product';
import { CartState } from './home/store/reducers';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {

  state: CartState;

  constructor(private store: Store<{ rootReducer: { cartState: CartState } }>) {
  }

  ngOnInit(): void {
    this.store.select(state => state.rootReducer.cartState).subscribe((state => this.state = state));
  }
}
