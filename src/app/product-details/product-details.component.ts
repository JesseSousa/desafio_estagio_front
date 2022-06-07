import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  product: Product = {} as Product;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.productsService
      .getProducts()
      .forEach(
        (r) =>
          (this.product =
            r.products.find((p) => p.id === productIdFromRoute) ||
            ({} as Product))
      );
  }
}
