import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  [key: string]: any;
}

interface Response {
  products: Product[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Response>('https://dummyjson.com/products', {
      params: {
        select: 'title,description,price,brand,category,thumbnail,images',
      },
    });
  }
}
