import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import {AppComponent} from '../app.component';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';

describe('HomeComponent', async () => {
  let component = HomeComponent.prototype;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        HttpClientModule,
      ],
      declarations: [AppComponent, HomeComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', (done) => {
    done();
    expect(component).toBeTruthy();
  });

});
