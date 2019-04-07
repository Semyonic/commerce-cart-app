import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';

describe('ConfigService', async () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ConfigService]
  }));

  it('should be created', (done) => {
    const service: ConfigService = TestBed.get(ConfigService);
    done();
    expect(service).toBeTruthy();
  });
});
