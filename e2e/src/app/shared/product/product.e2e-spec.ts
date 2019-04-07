import { AppPage } from '../../app.po';
import { ProductPo } from './product.po';
import { CartPo } from '../cart';

describe('Product',() => {
  let page: AppPage;
  let productComponent: ProductPo;
  let cartComponent: CartPo;

  beforeAll((done) => {
    page = new AppPage();
    productComponent = new ProductPo();
    cartComponent = new CartPo();

    page.navigateTo();
    done();
  });

  it('should add item to the cart', (done) => {
    productComponent.addItemToCart().then(() => {
      expect(cartComponent.getItem()).toBeGreaterThan(0);
      done();
    })

  });
});
