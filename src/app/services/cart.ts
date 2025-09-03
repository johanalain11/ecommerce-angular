import { Product } from './../models/products';
import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.update(current => [...current, product]);
  }
}
