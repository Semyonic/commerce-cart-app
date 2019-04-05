import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <div class="card mb-3">
      <h3 class="card-header">{{productHeader}}</h3>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <h6 class="card-subtitle text-muted">{{mutedText}}</h6>
      </div>
      <img style="height: 200px; width: 100%; display: block;"
           [src]="productImg"
           [alt]="productImgAlt">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
      </div>
      <div class="card-body">
        <p class="btn btn-outline-primary" (click)="onClick($event)">Add To Cart</p>
        <p class="btn btn-outline-primary" (click)="onClick2($event)">Remove From Cart</p>
      </div>
      <div class="card-footer text-muted">
        <p>{{price}}₺</p>
      </div>
    </div>`,
  styles: [
    `p {
      text-align: center;
      font-weight: bold;
    }

    .btn {
      margin-left: 35%;
    }`
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() productHeader: string;
  @Input() productTitle: string;
  @Input() productName: string;
  @Input() mutedText: string;
  @Input() productImg: string;
  @Input() productImgAlt: string;
  @Input() productDescription: string;
  @Input() price: number;

  @Output() addToCart = new EventEmitter<MouseEvent>();
  @Output() removeCart = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent) {
    this.addToCart.emit(event);
  }

  onClick2(event: MouseEvent) {
    this.removeCart.emit(event);
  }
}
