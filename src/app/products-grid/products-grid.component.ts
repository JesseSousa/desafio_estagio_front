import { Component, OnInit } from '@angular/core';

import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
})
export class ProductsGridComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  async ngOnInit() {
    this.productsService
      .getProducts()
      .forEach((a) => (this.products = a.products));
  }
}
