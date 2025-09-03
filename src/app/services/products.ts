import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class Products {
  axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
  });

  async getProducts() {
    const response = await this.axiosInstance.get('/');
    return response.data;
  }

  async getProductById(id: number) {
    const response = await this.axiosInstance.get(`/${id}`);
    return response.data;
  }
}
