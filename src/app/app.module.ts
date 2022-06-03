import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductsContainerComponent } from './products-container/products-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProductsGridComponent,
    ProductsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
