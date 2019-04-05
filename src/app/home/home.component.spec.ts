import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import {AppComponent} from '../app.component';
import {StoreModule} from '@ngrx/store';
import {rootReducer} from '../store';
import {HttpClientModule} from '@angular/common/http';

interface UHomeComponent {
  component: HomeComponent;
  fixture: ComponentFixture<HomeComponent>;
}

describe('HomeComponent', function(this: UHomeComponent) {

  function getRandomId(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(
          { rootReducer }
        ),
        HttpClientModule,
      ],
      declarations: [AppComponent, HomeComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    this.fixture = TestBed.createComponent(HomeComponent);
    this.component = fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should create', () => {
    expect(this.component).toBeTruthy();
  });

  it('should have menus', function () {
    this.component.myMenu$.
  });

});
