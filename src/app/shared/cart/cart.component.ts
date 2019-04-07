import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from './store/reducers';
import { RemoveFromCart, UpdateToCart } from './store/actions';
import { Product } from '../types/Product';

@Component({
  selector: 'app-cart',
  template: `
    <div>
      <table class="table table-secondary">
        <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
        </thead>
        <tbody id="cartItems">
        <tr [id]="i" *ngFor="let item of state.product; let i=index;">
          <td [innerText]="item.name"></td>
          <td>
            <input type="number" (keyup)="onKey($event)" (change)="onKey($event)" (blur)="update(item)" [valueAsNumber]="item.quantity">
          </td>
          <td [innerText]="item.quantity * item.price"></td>
          <td id="remove-product-{{i}}" (click)="removeFromCart(item)">X</td>
        </tr>
        </tbody>
      </table>
    </div>`,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {

  @Input() tableHead: string[];
  @Input() items: Product[];
  state: CartState;

  constructor(private store: Store<{ appState: { cartState } }>) {
  }

  private _qty: number;

  public get qty(): number {
    return Number(this._qty);
  }

  public set qty(value: number) {
    this._qty = value;
  }

  public ngOnInit(): void {

    this.store.select(state => state.appState.cartState).subscribe((state => this.state = state));
  }

  update(item: Product) {
    this.store.dispatch(new UpdateToCart({ ...item, quantity: this.qty }));
  }

  removeFromCart(item: Product) {
    this.store.dispatch(new RemoveFromCart(item));
  }

  onKey(event) {
    this.qty = event.target.value;
  }

}
