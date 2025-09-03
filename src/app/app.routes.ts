import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import { CartList } from './pages/cart-list/cart-list';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ProductsList
  },
  {
    path: 'cart',
    component: CartList
  }
];
