import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './shared/product/product.component';
import { CartComponent } from './shared/cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RestService } from './shared/services/rest.service';
import { ProductService } from './services/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './shared/services/config.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      { rootReducer }
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormsModule,
  ],
  providers: [RestService, ConfigService, ProductService],
  exports: [
    AppComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
