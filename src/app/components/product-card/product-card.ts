import { Component } from '@angular/core';
import { Product } from '../../models/products';
import { input, inject } from '@angular/core';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  product = input.required<Product>();
  CartService = inject(Cart);
}
