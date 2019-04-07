import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import {HttpClient, HttpClientModule, HttpResponse} from '@angular/common/http';
import {ConfigService} from '../../shared/services/config.service';
import {Product} from '../../shared/types/Product';
import { pluck } from 'rxjs/operators';


describe('ProductService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClient, ConfigService]
  }));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  it('should be reachable', (done) => {
    const service: ProductService = TestBed.get(ProductService);
    service.getAllProducts().subscribe((response: HttpResponse<Product[]>) => {
      expect(response.status).toBe(200);
      done();
    });
  });

  it('should get all products', (done) => {
    const service: ProductService = TestBed.get(ProductService);
    service.getAllProducts().pipe(pluck('body')).subscribe((response: Product[]) => {
      expect(response.length).toBeGreaterThan(0);
      done();
    });
  });
});
