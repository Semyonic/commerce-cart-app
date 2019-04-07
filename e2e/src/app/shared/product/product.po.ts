import { by, element } from 'protractor';

export class ProductPo {

  addItemToCart = () => element(by.id('btnAddToCart')).click();
}
