import { Component, inject } from '@angular/core';
import { CardItem } from '../../components/cart-item/cart-item';
import { Cart } from '../../services/cart';
import { OrderSummary } from '../../components/order-summary/order-summary';

@Component({
  selector: 'app-cart-list',
  imports: [CardItem, OrderSummary],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.css'
})
export class CartList {
  cartService = inject(Cart);

}
