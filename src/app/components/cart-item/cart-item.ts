import { Component, input, inject } from '@angular/core';
import { Product } from '../../models/products';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css'
})
export class CardItem {
  cartItem = input.required<Product>();
  cartService = inject(Cart);
  delete(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}
