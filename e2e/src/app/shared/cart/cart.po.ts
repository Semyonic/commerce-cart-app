import { by, element } from 'protractor';

export class CartPo {

  getItem(): any {
    return element.all(by.id('cartItems')).count();
  }

  removeItem(): any {
    return element.all(by.id)
  }
}
