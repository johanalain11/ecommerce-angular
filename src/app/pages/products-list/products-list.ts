import { Product } from './../../models/products';
import { Component, inject, signal } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Products } from '../../services/products';
import axios from 'axios';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList {

  products = signal<Product[]>([]);
  ProductService = inject(Products);

  async ngOnInit(){
    this.products.set(await this.ProductService.getProducts());

    /**
     * IMPORTANT
     * Supprimer l'initialisation du stock à 3 plus tard.
     * Cela a été fait car l'API ne renvoie pas encore le stock des produits.
     */
    for (const product of this.products()) {
      product.stock = product.stock || 3;
    }
  }
}
