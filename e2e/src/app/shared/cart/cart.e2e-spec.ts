import { AppPage } from '../../app.po';
import { ProductPo } from '../product/';
import { browser } from 'protractor';

describe('Product', () => {
  let page: AppPage;
  let productComponent: ProductPo;

  beforeAll(() => {
    page = new AppPage();
    productComponent = new ProductPo();
    page.navigateTo();
  });

  it('should add item to the cart', () => {
    productComponent.addItemToCart();
    browser.sleep(6000);
  });

  it('should remove item from cart', () => {
    productComponent.addItemToCart();
  });
});
