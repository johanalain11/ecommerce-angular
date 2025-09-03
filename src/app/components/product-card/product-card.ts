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

  // Animation lors de l'ajout d'un article au panier
  isTooltipVisible = false;

  showTooltip() {
    this.isTooltipVisible = true;
    setTimeout(() => {
      this.isTooltipVisible = false;
    }, 1000);
  }
}
