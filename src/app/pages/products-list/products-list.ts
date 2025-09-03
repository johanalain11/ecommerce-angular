import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { Product } from '../../models/products';
import { ProductCard } from '../../components/product-card/product-card';
import axios from 'axios';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList {

  products = signal<Product[]>([]);

  async ngOnInit(){
    axios.get('https://fakestoreapi.com/products/')
      .then(response => {
        this.products.set(response.data);
      });
  }
}
