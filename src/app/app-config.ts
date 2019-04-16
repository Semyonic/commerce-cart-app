import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Environment } from './shared/types/Environment';

@Injectable()
export class AppConfig {

  private env: Environment.ConfigResponse;

  constructor(private http: HttpClient) {
  }

  public getConfig(key: any) {
    return this.env[key];
  }

  public getEnv(key: Environment.Keys) {
    return this.env[key];
  }

  public async load() {
    return new Promise(((resolve, reject) => {
      return this.http.get(`${environment.API}/config`).subscribe((res: Environment.ConfigResponse) => resolve(this.env = res));
    }));
  }
}
