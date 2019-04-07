import { ProductState, productReducer } from './reducers';
import { Product } from '../../shared/types/Product';
import { ProductActionTypes } from './actions';

describe('Product State', () => {

  it('should get items from API when Get action dispatched', (done) => {
    const mockProducts: Product = {
      id: 6, price: 24, image: '', name: 'Mock Product', type: 'Mock type', createdAt: new Date().toDateString(), quantity: 3
    };
    const state: ProductState = { products: [] };
    productReducer(state, {type: ProductActionTypes.ADD, payload: mockProducts});
    const actual = state.products.length;
    expect(actual).toBeGreaterThan(0);
    done();
  });
});
