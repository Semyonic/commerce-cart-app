import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { rootReducer } from '../../store';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: Store<{ rootReducer: { cartState } }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...rootReducer,
          feature: combineReducers(rootReducer),
        }),
        // other imports
      ],
      declarations: [
        CartComponent,
        // other declarations
      ],
      providers: [
        // other providers
      ],
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    beforeEach(() => {
      fixture = TestBed.createComponent(CartComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created', () => {
      expect(component).toBeTruthy();
    });
  });
});
