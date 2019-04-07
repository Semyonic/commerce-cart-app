import { CartState, cartReducer } from './reducers';
import { Product } from '../../types/Product';
import { CartActionTypes } from './actions';

describe('Cart State', () => {

  it('should add item to cart when Add To Cart is dispatched', (done) => {
    const mockProduct: Product = {
      id: 6, price: 24, image: '', name: 'Mock Product', type: 'Mock type', createdAt: new Date().toDateString(), quantity: 3
    };
    const state: CartState = { product: [] };
    cartReducer(state, { type: CartActionTypes.ADD, payload: mockProduct });
    const actual = state.product.findIndex(x => x.id === mockProduct.id);
    expect(actual).toBeGreaterThan(-1);
    done();
  });

  it('should increase quantity in cart when Update To Cart is dispatched', (done) => {
    const mockStateProducts: Product[] = [
      {
        id: 3, price: 30, image: '', name: 'Mock Product', type: 'Mock type', createdAt: new Date().toDateString(), quantity: 1
      },
      {
        id: 5, price: 10, image: '', name: 'Mock Product', type: 'Mock type', createdAt: new Date().toDateString(), quantity: 1
      }];
    const mockProduct: Product = {
      id: 3, price: 24, image: '', name: 'Mock Product', type: 'Mock type', createdAt: new Date().toDateString(), quantity: 3
    };
    const state: CartState = { product: mockStateProducts };
    cartReducer(state, { type: CartActionTypes.UPDATE, payload: mockProduct });
    expect(state.product.find(x => x.id === mockProduct.id).quantity).toBe(3);
    done();
  });

  it('should remove items having more than one quantities from cart when Remove From Cart dispatched', (done) => {
    const mockStateProducts: Product[] = [
      {
        id: 9, price: 30, image: '', name: 'Mock Product', type: 'Mock type', createdAt: new Date().toDateString(), quantity: 1
      },
      {
        id: 1, price: 24, image: '', name: 'Mock Product', type: 'Mock type', createdAt: new Date().toDateString(), quantity: 3
      }];
    const mockProduct: Product = {
      id: 1, price: 24, image: '', name: 'Mock Product', type: 'Mock type', createdAt: new Date().toDateString(), quantity: 1
    };
    const state: CartState = { product: mockStateProducts };
    cartReducer(state, { type: CartActionTypes.REMOVE, payload: mockProduct });
    expect(state.product.length).toBe(1);
    done();
  });

});
