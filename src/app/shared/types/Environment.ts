export namespace Environment {

  export interface ConfigResponse {
    environment: Type;
    production: boolean;
    API: string;
  }

  export enum Keys {
    API = 'API',
    ENV = 'environment',
    PROD = 'production'
  }

  export enum Type {
    Local = 'local',
    Development = 'dev',
    Test = 'test',
    Production = 'prod'
  }

}
