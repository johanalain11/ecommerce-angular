import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { Product } from '../../models/products';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      image: 'favicon.ico',
      stock: 10
    },
    {
      id: 2,
      title: 'Product 2',
      price: 200,
      image: 'favicon.ico',
      stock: 5
    },
    {
      id: 3,
      title: 'Product 3',
      price: 300,
      image: 'favicon.ico',
      stock: 0
    }
  ]);
}
