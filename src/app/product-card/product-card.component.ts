import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = {} as Product;

  constructor() {}

  ngOnInit(): void {}
}
