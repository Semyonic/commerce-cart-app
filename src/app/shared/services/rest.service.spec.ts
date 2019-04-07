import { TestBed } from '@angular/core/testing';

import { RestService } from './rest.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';

describe('RestService', async () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [RestService, HttpClient, ConfigService]
  }));

  it('should be created', (done) => {
    const service: RestService = TestBed.get(RestService);
    expect(service).toBeTruthy();
    done();
  });
});
