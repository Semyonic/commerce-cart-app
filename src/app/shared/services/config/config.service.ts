import { Injectable } from '@angular/core';
import { Environment } from '../../types/Settings';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ConfigService {
  readonly environment: Environment;

  constructor() {
    this.environment = environment;
  }
}
