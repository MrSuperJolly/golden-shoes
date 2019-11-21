import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { OurproductsPageComponent } from './ourproducts-page/ourproducts-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';

const appRoutes: Routes = [
  {path: 'products', component: OurproductsPageComponent},
  {path: 'home', component: HomepageComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    ProductTileComponent,
    TopNavComponent,
    OurproductsPageComponent,
    HomepageComponent,
    FeaturedProductsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
