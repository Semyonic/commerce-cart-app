import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '../../home/store/reducers';
import { AddToCart } from '../../home/store/actions';
import { Product } from '../types/Product';

@Component({
  selector: 'app-cart',
  template: `
    <div>
      <table class="table table-primary">
        <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of state.product">
          <td [innerText]="item.name"></td>
          <td><input type="number"
                     (keyup)="onKey($event)"
                     (change)="onKey($event)"
                     (blur)="update(item)"
                     [valueAsNumber]="item.quantity"></td>
          <td [innerText]="item.quantity * item.price"></td>
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

  constructor(private store: Store<{ rootReducer: { cartState } }>) {
  }

  private _qty: number;

  public get qty(): number {
    return Number(this._qty);
  }

  public set qty(value: number) {
    this._qty = value;
  }

  public ngOnInit(): void {
    this.store.select(state => state.rootReducer.cartState).subscribe((state => this.state = state));
  }

  update(item: Product) {
    this.store.dispatch(new AddToCart({ ...item, quantity: this.qty }));
  }

  onKey(event) {
    this.qty = event.target.value;
  }

}
